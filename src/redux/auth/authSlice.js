import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
import axios from "axios";




const setToken = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
}

const clearToken = () => {
    axios.defaults.headers.common.Authorization = '';
  };


export const apiRegisterUser = createAsyncThunk(
    'auth/apiRegisterUser',
    async (formData, thunkApi) => {
        try {
            const { data } = await axios.post('/users/signup', formData);

            setToken(data.token)

            return data;

        } catch (error) {
            return thunkApi.rejectWithValue(error.message)
        }
    }
)

export const apiLoginUser = createAsyncThunk(
    'auth/apiLoginUser',
    async (formData, thunkApi) => {
        try {
            const { data } = await axios.post('/users/login', formData);

            setToken(data.token)

            return data;

        } catch (error) {
            return thunkApi.rejectWithValue(error.message)
        }
    }
)
export const apiRefreshUser = createAsyncThunk(
    'auth/apiRefreshUser',
    async (_, thunkApi) => {
      const state = thunkApi.getState();
      const token = state.auth.token;
      if (!token) return thunkApi.rejectWithValue("You don't have a token!");
      try {
        setToken(token);
        const { data } = await axios.get('/users/current');
  
        return data;
      } catch (error) {
        return thunkApi.rejectWithValue(error.message);
      }
    }
  );

  export const apiLogoutUser = createAsyncThunk(
    'auth/apiLogoutUser',
    async (_, thunkApi) => {
      try {
        await axios.post('/users/logout');
        clearToken();
  
        return;
      } catch (error) {
        return thunkApi.rejectWithValue(error.message);
      }
    }
  );







const initialState = {
    token: null,
    userData: null,
    isLoggedIn: false,
    error: null,
    isLoading: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder => builder
    .addCase(apiRegisterUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.userData = action.payload.user;
        state.token = action.payload.token;
    })
    .addCase(apiLoginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.userData = action.payload.user;
        state.token = action.payload.token;
    })
    .addCase(apiRefreshUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.userData = action.payload
    })
    .addCase(apiLogoutUser.fulfilled, () => {
        return initialState;
    })

    .addMatcher(
        isAnyOf(
            apiRegisterUser.pending,
            apiLoginUser.pending,
            apiRefreshUser.pending,
            apiLogoutUser.pending,

        ), state => {
            state.isLoading = true;
            state.error = null;
        }
    )
    .addMatcher(
        isAnyOf(
            apiRegisterUser.rejected,
            apiLoginUser.rejected,
            apiRefreshUser.rejected,
            apiLogoutUser.rejected,
        ), (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    )

})

export const authReducer = authSlice.reducer;