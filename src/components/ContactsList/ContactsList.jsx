import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
// import { selectContacts } from '../../redux/contactsSlice';
// import { selectNameFilter } from '../../redux/filtersSlice';
import styles from './ContactList.module.css';
import { selectFilteredContacts } from '../../redux/contactsSlice';

const ContactsList = () => {
  

  const contacts = useSelector(selectFilteredContacts);
  



  

  return (
    <ul className={styles.list}>
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactsList;
