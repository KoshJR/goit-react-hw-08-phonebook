import { useDispatch, useSelector } from 'react-redux';
import css from './Contacts.module.css';
import { deleteContact } from '../../redux/contacts/operations';
import { visibleContacts } from '../../redux/contacts/selectors';


export const ContactsList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(visibleContacts)

  const handleDeleteContact = event => {
    const contactId = event.target.id;
    const action = deleteContact(contactId);
    dispatch(action);
  };

  
    

  return (
    <ul className={css.contactsList}>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id} className={css.contactItem}>
          <div className={css.contact}>
            {name}: {number}
          </div>
          <button
            id={id}
            onClick={event => handleDeleteContact(event)}
            type="button"
            className={css.deleteBtn}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
