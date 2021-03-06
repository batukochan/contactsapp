import { nanoid } from '@reduxjs/toolkit'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addContact } from '../redux/contactsSlice/contactsSlice'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import './styles.css'

const Form = () => {

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [number, setNumber] = useState('')

    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!name || !number || !surname) return false;
        dispatch(addContact({ id: nanoid(), name, surname, number }))
        setName('')
        setNumber('')
        setSurname('')
    }
    return (
        <form className='form' onSubmit={handleSubmit}>
            <div className="title">Welcome!</div>
         
            <div className="input-container ic1">
                <input id="firstname" className="input" type="text" placeholder=" " value={name} onChange={(e) => setName(e.target.value)} />
                <div className="cut"></div>
                <label htmlFor="firstname" className="placeholder">First name</label>
            </div>
            <div className="input-container ic2">
                <input   id="lastname" className="input" type="text" placeholder=" " value={surname} onChange={(e) => setSurname(e.target.value)} />
                <div className="cut"></div>
                <label htmlFor="lastname" className="placeholder">Last name</label>
            </div>
            <div className="input-container ic2">

                <div className="cut cut-short"></div>
                <div id="email" className="input" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <PhoneInput
                        placeholder="Enter phone number"
                        value={number}
                        onChange={setNumber}
                    /></div>
            </div>
            <button type="text" className="submit">Add your contact</button>
        </form>
    )
}

export default Form
