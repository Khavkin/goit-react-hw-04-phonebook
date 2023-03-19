import { ListItem } from './ContactListItem.styled';
import PropTypes from 'prop-types';

const ContactListItem = ({ contact, onDelete }) => {
  const { name, number } = contact;
  return (
    <ListItem>
      <span>{name}:</span>
      <span>{number}</span>
      <button type="button" onClick={onDelete}>
        Delete
      </button>
    </ListItem>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),

  onDelete: PropTypes.func.isRequired,
};

export default ContactListItem;
