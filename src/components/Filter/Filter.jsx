import { Component } from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
  static propTypes = {
    filter: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };
  handleOnChange = ({ currentTarget }) => {
    const value = currentTarget.value;
    this.props.onChange(value);
  };
  render() {
    return (
      <>
        <h3>Find contacts by name</h3>
        <input value={this.props.filter} onChange={this.handleOnChange}></input>
      </>
    );
  }
}

export default Filter;
