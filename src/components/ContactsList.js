import React from 'react'
import { contactSelectors } from '.././redux/contactsSlice/contactsSlice'
import { useSelector, useDispatch } from 'react-redux'
import { removeAllContact } from '.././redux/contactsSlice/contactsSlice'

import Items from './Items'


const ContactsList = () => {
    const contacts = useSelector(contactSelectors.selectAll)
    const dispatch = useDispatch()
    console.log(contacts)
    const handleRemoveAll = () => {
        if (window.confirm('are you sure ?')) {
            dispatch(removeAllContact())
        }
    }

    return (
        <div className='form'>
            <div className='title title2' >Contacts List</div>
            
            {contacts.map((item, i) => <Items key={i} item={item} />)}
            {contacts.length > 0 && <button className='btn editBtn2' onClick={handleRemoveAll}>Delete All</button>}
        </div>
    )
}

export default ContactsList
