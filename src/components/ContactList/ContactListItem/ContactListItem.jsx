import { Component } from 'react';
import { ListItem } from './ContactListItem.styled';
import PropTypes from 'prop-types';

class ContactListItem extends Component {
  static propTypes = {
    contact: PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),

    onDelete: PropTypes.func.isRequired,
  };

  render() {
    const { name, number } = this.props.contact;
    return (
      <ListItem>
        <span>{name}:</span>
        <span>{number}</span>
        <button type="button" onClick={this.props.onDelete}>
          Delete
        </button>
      </ListItem>
    );
  }
}

export default ContactListItem;
