import { useState, useEffect } from 'react';
import Form from 'components/Form';
import Filter from 'components/Filter';
import Contacts from 'components/Contacts';

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem('phoneBook')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('phoneBook', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = data => {
    const check = contacts.find(
      el => el.name.toLowerCase() === data.name.toLowerCase()
    );
    return check
      ? alert(`${data.name} is already exist.`)
      : setContacts([...contacts, data]);
  };

  const getFilteredContacts = () => {
    return contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const handleClickDelete = id => {
    setContacts(contacts.filter(el => el.id !== id));
  };

  const filteredContacts = getFilteredContacts();

  return (
    <div>
      <h2 style={{ color: '#FF6C00' }}>Phonebook</h2>
      <Form onSubmit={formSubmitHandler} />
      <h2 style={{ color: '#FF6C00' }}>Contacts</h2>
      <Filter onChange={setFilter} />
      <Contacts onDelete={handleClickDelete} data={filteredContacts} />
    </div>
  );
};
