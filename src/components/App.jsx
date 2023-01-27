import { useState, useEffect } from 'react';
import Form from 'components/Form';
import Filter from 'components/Filter';
import Contacts from 'components/Contacts';

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem('phoneBook')) ?? ''
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('phoneBook', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = data => {
    let check = false;
    if (contacts !== '') {
      check = contacts.find(
        el => el.name.toLowerCase() === data.name.toLowerCase()
      );
    }
    return check
      ? alert(`${data.name} is already exist.`)
      : setContacts([...contacts, data]);
  };

  const handleClickDelete = id => {
    setContacts(contacts.filter(el => el.id !== id));
  };

  return (
    <div>
      <h2 style={{ color: '#FF6C00' }}>Phonebook</h2>
      <Form onSubmit={formSubmitHandler} />
      <h2 style={{ color: '#FF6C00' }}>Contacts</h2>
      <Filter onChange={setFilter} />
      <Contacts onDelete={handleClickDelete} data={contacts} filter={filter} />
    </div>
  );
};
