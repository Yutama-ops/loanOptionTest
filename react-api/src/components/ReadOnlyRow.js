import React from 'react'

const readOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
        <tr>
            <td>{contact.name}</td>
            <td>{contact.country}</td>
            <td>{contact.alpha_two_code}</td>
            <td><a href={contact.web_pages[0]} >{contact.domains[0]}</a></td>
            {/* <td>
                <button 
                type="button" 
                onClick={(event)=> handleEditClick(event, contact)}
                >
                    Edit
                </button>
                <button 
                type="button" 
                onClick={()=> handleDeleteClick(contact.id)}
                >
                    Delete
                </button>
            </td> */}
        </tr>
  )
}

export default readOnlyRow