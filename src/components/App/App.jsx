import ContactForm from 'components/ContactForm';
import { Component } from 'react';
import { MainContainer } from './App.styled';
import { nanoid } from 'nanoid';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';

// const test = {
//   contacts: [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
//   filter: '',
// };
const APP_STORAGE = 'phonebook';

class App extends Component {
  defaultState = {
    contacts: [],
    filter: '',
  };

  state = { ...this.defaultState };

  componentDidMount() {
    const fromLocalStorage = localStorage.getItem(APP_STORAGE);
    const contacts = JSON.parse(fromLocalStorage);
    if (contacts) this.setState({ contacts: [...contacts] });
  }
  componentDidUpdate(_, prevState) {
    const { contacts } = this.state;
    const prevContacts = prevState.contacts;
    if (contacts.length !== prevContacts.lenght) {
      localStorage.setItem(APP_STORAGE, JSON.stringify(contacts));
    }
  }

  handleOnSubitContactForm = contact => {
    if (!this.findContact(contact.name)) {
      this.addContact(contact);
      return true;
    } else return false;
  };

  addContact = contact => {
    const toAdd = { ...contact, id: nanoid() };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, toAdd],
    }));
  };

  findContact = name => {
    const { contacts } = this.state;
    const toFind = name.toLowerCase();
    if (contacts.find(({ name }) => name.toLowerCase() === toFind)) return true;
    else return false;
  };

  handleOnFilterChange = filter => {
    this.setState({ filter });
  };

  showContacts = () => {
    const { contacts } = this.state;
    const filter = this.state.filter.toLocaleLowerCase();

    return contacts.filter(({ name }) => name.toLowerCase().includes(filter));
  };

  handleOnDeleteContact = contactID => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(({ id }) => id !== contactID),
    }));
  };

  render() {
    return (
      <MainContainer>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleOnSubitContactForm} />
        <h2>Contacts</h2>
        <Filter
          filter={this.state.filter}
          onChange={this.handleOnFilterChange}
        />
        {this.state.contacts.length !== 0 && (
          <ContactList
            contacts={this.showContacts()}
            onDelete={this.handleOnDeleteContact}
          />
        )}
      </MainContainer>
    );
  }
}

export default App;
