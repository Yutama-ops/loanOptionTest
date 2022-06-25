// rafce
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ApiData = () => {
    const url = 'http://universities.hipolabs.com/search?country=Australia';
    const [json, setJson] = useState(null);
    let content = null;

    useEffect(() => {
        axios.get(url)
            .then( response => {
                setJson(response.data)
            })
    }, [url])

    
    if(json){
        content = 
        <div>
            <tr>
            { json.map((item, index) => { 
        return( <td key={index+1}>1{item.domains}</td> ) } ) }

            </tr>
        </div>
    }

  return (
    <div>{content}</div>
  )
}

export default ApiData