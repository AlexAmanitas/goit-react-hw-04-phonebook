import { useState, useEffect } from 'react';
import Form from 'components/Form';
import Filter from 'components/Filter';
import Contacts from 'components/Contacts';

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem('phoneBook')) ?? ''
    // [
    //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    //     { id: 'id-5', name: 'Edem Cldfmts', number: '645-17-79' },
    //     { id: 'id-6', name: 'Alec Mjduels', number: '645-17-79' },
    //     { id: 'id-7', name: 'Karl Fridr', number: '645-17-79' },
    //     { id: 'id-8', name: 'Joiur Masuro', number: '645-17-79' },
    //   ]
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('phoneBook', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = data => {
    contacts.map(el => {
      if (el.name.toLowerCase() === data.name.toLowerCase()) {
        alert(`${data.name} is already in contacts.`);
      }
      return el.name;
    });
    setContacts([...contacts, data]);
  };

  const handleChangeFilter = data => {
    setFilter(data);
  };

  const handleClickDelete = data => {
    console.log(data);
    setContacts(contacts.filter(el => el.id !== data));
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Form onSubmit={formSubmitHandler} />
      <h2>Contacts</h2>
      <Filter onChange={handleChangeFilter} />
      <Contacts onDelete={handleClickDelete} data={contacts} filter={filter} />
    </div>
  );
};
