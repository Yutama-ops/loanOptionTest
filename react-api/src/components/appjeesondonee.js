import React, { useState, Fragment, useEffect } from 'react';
// rafce
import axios from 'axios';

import './App.css';
import dt from './mock-data.json';
import {nanoid} from 'nanoid';
import ReadOnlyRow from './components/ReadOnlyRow.js';
import EditableRow from './components/EditableRow';
import ApiData from './Views/ApiData';

function App() {
  const url = 'http://universities.hipolabs.com/search?country=Australia';
    const [data, setData] = useState(null);
    let content = null;
    const [contacts, setContacts] = useState(dt);
    

    useEffect(() => {
        axios.get(url)
            .then( response => {
                setData(response.data)
                // content = response.data
            })
    }, [url])

    // if(data){
    //   content = data.map((item) => {
    //     // setContacts(content);
    //     return(item)
    //   })
    // }
    // if(json){
    //     content = 
    //     json.map((item) => { 
    //         return( item.domains ) } ) 
    
    // }
  
  const [addFormData, setAddFormData] = useState({
    name: '',
      country: '',
      alpha_two_code: '',
      web_pages: '',
      domains: ''
  });

  const [editFormData, setEditFormData] = useState({
    fullName: '',
    address: '',
    phoneNumber: '',
    email: ''
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = {...addFormData};
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = {...editFormData};
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newData = {
      id: nanoid(),
      name: data[0].name,
      country: data[0].country,
      alpha_two_code: data[0].alpha_two_code,
      web_pages: data[0].web_pages,
      domains: data[0].domains
    };
    const newDatas = [...data, newData];
    setData(newDatas);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault()

    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      address: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email
    };
    const newContacts = [...contacts];

    const index =   contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;
    setContacts(newContacts);
    setEditContactId(null);
  }

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      fullName: contact.fullName,
      address: contact.address,
      phoneNumber: contact.phoneNumber,
      email: contact.email
    }
    setEditFormData(formValues);
  }

  const handleCancelClick = () => {
    setEditContactId(null);
  }

  const handleDeleteClick = () => {
    const newData = [...data];

    // const index =   contacts.findIndex((contact) => contact.id === contactId);

    newData.splice(data.length-1 , 1);

    setData(newData)
  }

  if(data){
    content =  data.map((file)=> (
      <Fragment>
        { editContactId === file.id ? (
        <EditableRow 
          editFormData={editFormData} 
          handleEditFormChange={handleEditFormChange}
          handleCancelClick={handleCancelClick}
        /> ) : ( 
        <ReadOnlyRow 
          contact={file} 
          handleEditClick={handleEditClick}
          handleDeleteClick={handleDeleteClick}
          />
        )}
      </Fragment>
    ))         
  }

  return (
    <div className="app-container">
      {/* <div> {data.map()}</div> */}
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              {/* {typeof(data)} */}
            {/* {content[0].name} */}
            {/* {data[0].name} */}
            {/* {content[0].name} way to call api json*/}
              <th>Name</th>
              <th>Country</th>
              <th>Country Code</th>
              <th>Domain</th>
            </tr>
          </thead>
          <tbody>
            {
              content
            }
          </tbody>
        </table>
      </form>
      <h2>Buttons</h2>
      <form onSubmit={handleAddFormSubmit}>
                <button 
                type="button" 
                // onClick={(event)=> handleEditClick(event, contact)}
                >
                    Edit
                </button>
                <button 
                type="button" 
                onClick={()=> handleDeleteClick(data)}
                >
                    Delete
                </button>
            
        <button type="submit">Add</button>
      </form>
      {/* <ApiData /> */}

    </div>
  );
}

export default App;
