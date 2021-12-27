import { nanoid } from '@reduxjs/toolkit'
import {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addContact } from '../redux/contactsSlice/contactsSlice'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'


const Form = () => {

    const [name,setName] = useState('')
    const [number,setNumber] = useState('')

    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!name || !number) return false;
        dispatch(addContact({id:nanoid(),name,number}))
        setName('')
        setNumber('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>Contacts: 
            <input value={name} onChange={(e)=> setName(e.target.value)} /></div>
           Phone Number
           <PhoneInput
      placeholder="Enter phone number"
      value={number} 
      onChange={setNumber}
      />
          
            <button type='submit'>add</button>
        </form>
    )
}

export default Form
