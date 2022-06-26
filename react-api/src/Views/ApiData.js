// rafce
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ApiData = () => {
    const url = 'http://universities.hipolabs.com/search?country=Australia';
    const [json, setJson] = useState(null);
    let content = [];

    useEffect(() => {
        axios.get(url)
            .then( response => {
                setJson(response.data)
            })
    }, [url])
    
    if(json){
        content = 
        json.map((item) => { 
            return( item.domains ) } ) 
    
    }
    
    
    // if(json){
    //     content = 
    //     <div>
    //         <tr>
           
    //         </tr>
    //     </div>
    // }

  return (
    content
  )
}

export default ApiData