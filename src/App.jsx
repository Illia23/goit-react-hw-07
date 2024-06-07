import { useDispatch, useSelector } from 'react-redux';
import ContactsForm from './components/ContactsForm/ContactsForm';
import ContactsList from './components/ContactsList/ContactsList';
import SearchBox from './components/SearchBox/SearchBox';
import { fetchContacts } from './redux/contactsOps';
import { useEffect } from 'react';
import { selectError } from './redux/contactsSlice';
import { selectLoading } from './redux/contactsSlice';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';

const App = () => {
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);
const dispatch = useDispatch()
useEffect(() => {
  dispatch(fetchContacts())
 
}, [dispatch])

  return (
    <div>
      {error && <ErrorMessage />}
      {loading && <Loader />}
      <h1>Phonebook</h1>
      <ContactsForm />
      <h2>Contacts</h2>
      <SearchBox />
      <ContactsList />
    </div>
  );
};

export default App;
