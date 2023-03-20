import ContactForm from 'components/ContactForm';
import { useState } from 'react';
import { MainContainer } from './App.styled';
import { nanoid } from 'nanoid';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import { useLocalStorage } from 'components/Hooks/useLocalStorage';

const APP_STORAGE = 'phonebook';

const App = () => {
  const [contacts, setContacts] = useLocalStorage(APP_STORAGE, []);
  const [filter, setFilter] = useState('');

  const handleOnSubitContactForm = contact => {
    if (!findContact(contact.name)) {
      addContact(contact);
      return true;
    } else return false;
  };

  const addContact = contact => {
    const toAdd = { ...contact, id: nanoid() };
    setContacts(prevContacts => [...prevContacts, toAdd]);
  };

  const findContact = name => {
    const toFind = name.toLowerCase();
    if (contacts.find(({ name }) => name.toLowerCase() === toFind)) return true;
    else return false;
  };

  const handleOnFilterChange = filter => {
    setFilter(filter);
  };

  const showContacts = () => {
    const filterLC = filter.toLocaleLowerCase();

    return contacts.filter(({ name }) => name.toLowerCase().includes(filterLC));
  };

  const handleOnDeleteContact = contactID => {
    setContacts(oldContacts =>
      oldContacts.filter(({ id }) => id !== contactID)
    );
  };

  return (
    <MainContainer>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleOnSubitContactForm} />
      <h2>Contacts</h2>
      <Filter filter={filter} onChange={handleOnFilterChange} />
      {contacts.length !== 0 && (
        <ContactList
          contacts={showContacts()}
          onDelete={handleOnDeleteContact}
        />
      )}
    </MainContainer>
  );
};

export default App;
