import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ContactsList, Filter, FormAddContacts } from 'components';
import { fetchContacts } from '../redux/contacts/operations';



const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


  

  return (
    <main>
      <section >
        <div >
          <h1 >Phonebook</h1>
          <FormAddContacts />
          <h2 >Contacts</h2>
          <Filter />
          <ContactsList />

        </div>
      </section>
    </main>
  );
};

export default ContactsPage;