import React, { useState } from 'react';
import './App.css';
import data from './mock-data.json';

function App() {
  const [contacts, setContacts] = useState(data);
  return (
    <div className="app-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact)=> (
            <tr>
              <td>{contact.fullName}</td>
              <td>{contact.address}</td>
              <td>{contact.phoneNumber}</td>
              <td>{contact.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Add Contact</h2>
      <form>
        <input 
          type="text"
          name="fullName"
          required="required"
          placeholder='enter your name..'
        />
        <input 
          type="text"
          name="address"
          required="required"
          placeholder='enter your address'
        />
        <input 
          type="text"
          name="fullName"
          required="required"
          placeholder='enter your name..'
        />
      </form>

    </div>
  );
}

export default App;
