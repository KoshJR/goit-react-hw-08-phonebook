import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactsList, Filter, FormAddContacts } from 'components';
import { fetchContacts } from '../redux/contacts/operations';
import { selectContacts } from '../redux/contacts/selectors';

import css from '../components/Layout/Layout.module.css'

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts)

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


  
  return (
    <main>
      <section >
        <div >
          <h1 className={css.mainTitle}>Add your Contact</h1>
          <FormAddContacts />
          <h2 className={css.secondTitle}>Contacts</h2>
          <Filter />
          {contacts.length > 0 && <ContactsList />}
          

        </div>
      </section>
    </main>
  );
};

export default ContactsPage;