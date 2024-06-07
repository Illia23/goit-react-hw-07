import { useDispatch, useSelector } from 'react-redux';
import {selectContacts} from '../../redux/contactsSlice';
import styles from './ContactsForm.module.css';
import { addContact } from '../../redux/contactsOps';
const ContactsForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    const contactExists = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (contactExists) {
      alert(`${name} is already in contacts.`);
    } else {
      dispatch(addContact({name, number}))
      form.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label>
        Name
        <input
          type="text"
          name="name"
          required
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactsForm;
