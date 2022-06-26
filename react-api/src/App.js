import React, { useState, Fragment, useEffect } from 'react';
// rafce
import axios from 'axios';

import './App.css';
import {nanoid} from 'nanoid';
import ReadOnlyRow from './components/ReadOnlyRow.js';
import emptyRow from './components/emptyRow';

function App() {
  const url = 'http://universities.hipolabs.com/search?country=Australia';
    const [data, setData] = useState(null);
    let content = null;
    const [empty, setEmpty] = useState(null);
    

    useEffect(() => {
        axios.get(url)
            .then( response => {
                setData(response.data)
                // content = response.data
            })
    }, [url])
    

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

  const handleLoadClick = (event, contact) => {
    setEmpty("");
  }

  // const handleCancelClick = () => {
  //   setEditContactId(null);
  // }

  const handleDeleteClick = () => {
    const newData = [...data];

    // const index =   contacts.findIndex((contact) => contact.id === contactId);

    newData.splice(data.length-1 , 1);

    setData(newData)
  }

  if(data){
    content =  data.map((file)=> (
      <Fragment>
        { empty === null ? (
        <emptyRow 
        /> ) : ( 
        <ReadOnlyRow 
          contact={file} 
          handleDeleteClick={handleDeleteClick}
          />
        )}
      </Fragment>
    ))         
  }

  return (
    <div className="app-container">
      {/* <div> {data.map()}</div> */}
      <form>
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
                onClick={(event)=> handleLoadClick()}
                >
                    Load
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
