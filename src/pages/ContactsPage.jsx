import { ContactsList, Filter, FormAddContacts } from 'components';
import React from 'react'

const ContactsPage = () => {
    return (
        <main>
          <section>
            <div >
              <h1>Phonebook</h1>
              <FormAddContacts />
              <h2>Contacts</h2>
              <Filter />
              <ContactsList />
    
              
            </div>
          </section>
        </main>
      );
}

export default ContactsPage