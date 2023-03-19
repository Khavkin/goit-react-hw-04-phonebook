import { List } from './ContactList.styled';
import ContactListItem from './ContactListItem';
import PropTypes from 'prop-types';

const ContactsList = ({ contacts, onDelete }) => {
  return (
    <List>
      {contacts.map(contact => (
        <ContactListItem
          key={contact.id}
          contact={contact}
          onDelete={() => onDelete(contact.id)}
        />
      ))}
    </List>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired })
  ),
  onDelete: PropTypes.func.isRequired,
};

export default ContactsList;
