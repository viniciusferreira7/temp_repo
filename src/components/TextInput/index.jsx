import P from 'prop-types';
import './styles.css';

export const TextInput = ({ handleChange, searchValue }) => {
  return (
    <input
      className="text-input"
      type="search"
      onChange={handleChange}
      value={searchValue}
      placeholder="Type your search"
    />
  );
};

TextInput.defaultProps = {
  searchValue: '',
};

TextInput.propTypes = {
  handleChange: P.func.isRequired,
  searchValue: P.string,
};
