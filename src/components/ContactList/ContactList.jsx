import { Component } from 'react';
import { List } from './ContactList.styled';
import ContactListItem from './ContactListItem';
import PropTypes from 'prop-types';

class ContactsList extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({ id: PropTypes.string.isRequired })
    ),
    onDelete: PropTypes.func.isRequired,
  };
  render() {
    const { contacts } = this.props;
    return (
      <List>
        {contacts.map(contact => (
          <ContactListItem
            key={contact.id}
            contact={contact}
            onDelete={() => this.props.onDelete(contact.id)}
          />
        ))}
      </List>
    );
  }
}

export default ContactsList;
