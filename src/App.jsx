
import { Loader } from "components";
import { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "./redux/operations";
import { selectError, selectIsLoading } from "./redux/selectors";
import HomePage from "pages/HomePage";
import ContactsPage from "pages/ContactsPage";
import { Route, Routes } from "react-router-dom";
import LoginPage from "pages/LoginPage";
import RegisterPage from "pages/RegisterPage";
import Layout from "components/Layout/Layout";


export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading)
  const error = useSelector(selectError)

  useEffect(() => {
   dispatch(fetchContacts())
  }, [dispatch])
 
  return (
    <Layout>
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path='/' element={ <HomePage /> }/>
        <Route path='/register' element={ <RegisterPage /> }/>
        <Route path='/login' element={ <LoginPage /> }/>
        <Route path='/contacts' element={ <ContactsPage /> }/>
    
    </Routes>
    </Suspense>
    </Layout>
  );
};
