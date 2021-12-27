import React from 'react'
import { contactSelectors } from '.././redux/contactsSlice/contactsSlice'
import { useSelector } from 'react-redux'
import Items from './Items'
const ContactsList = () => {
    const contacts = useSelector(contactSelectors.selectAll)
    console.log(contacts)
    return (
        <div>
         {contacts.map((item,i) => <Items key={i} item={item}/>)}
        </div>
    )
}

export default ContactsList
