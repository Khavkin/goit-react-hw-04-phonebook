import PropTypes from 'prop-types';

const Filter = ({ filter, onChange }) => {
  const handleOnChange = ({ currentTarget }) => {
    const value = currentTarget.value;
    onChange(value);
  };

  return (
    <>
      <h3>Find contacts by name</h3>
      <input value={filter} onChange={handleOnChange}></input>
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default Filter;
