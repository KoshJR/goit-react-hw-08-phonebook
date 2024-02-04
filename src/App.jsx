
import { ContactsList, Filter, FormAddContacts, Loader } from "components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "./redux/operations";
import { selectError, selectIsLoading } from "./redux/selectors";


export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading)
  const error = useSelector(selectError)

  useEffect(() => {
   dispatch(fetchContacts())
  }, [dispatch])
 
  return (
    <div className="phone_book">
      <h1>Phone Book</h1>
      <FormAddContacts />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList/>
      {isLoading && (<Loader/>)}
      {error && <p>Error</p>}
    </div>
  );
};
