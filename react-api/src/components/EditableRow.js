import React from 'react'

const EditableRow = ({editFormData, handleEditFormChange, handleCancelClick}) => {
  return (
        <tr>
            <td>
                <input 
                    type="text"
                    name="fullName"
                    required="required"
                    placeholder='enter your name..'
                    value={editFormData.fullName}
                    onChange={handleEditFormChange}
                />
            </td>
            <td>
                <input 
                    type="text"
                    name="address"
                    required="required"
                    placeholder='enter your address..'
                    value={editFormData.address}
                    onChange={handleEditFormChange}
                />
            </td>
            <td>
                <input 
                    type="text"
                    name="phoneNumber"
                    required="required"
                    placeholder='enter your number..'
                    value={editFormData.phoneNumber}
                    onChange={handleEditFormChange}
                />
            </td>
            <td>
                <input 
                    type="text"
                    name="email"
                    required="required"
                    placeholder='enter your email..'
                    value={editFormData.email}
                    onChange={handleEditFormChange}
                />
            </td>
            <td>
                <button type="submit">Save</button>
                <button type="button" onClick={handleCancelClick}>
                    Cancel
                </button>
            </td>
        </tr>
  )
}

export default EditableRow