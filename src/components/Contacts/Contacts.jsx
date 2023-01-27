import PropTypes from 'prop-types';
import {
  ContactList,
  ContactListItem,
  ContactName,
  ContactNumber,
  DeleteButton,
} from './Contacts.styled';

const Contacts = ({ data, filter, onDelete }) => {
  let filterData = [];
  if (data !== '') {
    filterData = data.filter(el => {
      return el.name.toLowerCase().includes(filter.toLowerCase());
    });
  }

  const handleOnClick = evt => {
    onDelete(evt.currentTarget.id);
  };

  if (filterData.length === 0) return;

  return (
    <ContactList>
      {filterData.map(el => {
        const { name, number, id } = el;
        return (
          <ContactListItem key={id}>
            <ContactName>{name}</ContactName>
            <ContactNumber>{number}</ContactNumber>
            <DeleteButton id={id} type="button" onClick={handleOnClick}>
              Delete
            </DeleteButton>
          </ContactListItem>
        );
      })}
    </ContactList>
  );
};

export default Contacts;

Contacts.propTypes = {
  props: PropTypes.shape({
    onDelete: PropTypes.func.isRequired,
    data: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
    filter: PropTypes.string.isRequired,
  }),
};
