
import { Loader } from "components";
import { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import HomePage from "pages/HomePage";
import ContactsPage from "pages/ContactsPage";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "pages/LoginPage";
import RegisterPage from "pages/RegisterPage";
import Layout from "components/Layout/Layout";
import { apiRefreshUser } from "./redux/auth/authSlice";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute"
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";


export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(apiRefreshUser())
  }, [dispatch])
 

  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute>
                <RegisterPage />
              </RestrictedRoute>
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute>
                <LoginPage />
              </RestrictedRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Layout>
  );

};
