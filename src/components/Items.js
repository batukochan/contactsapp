import React from 'react'
import './styles.css'
import { useDispatch } from 'react-redux'
import { removeContact } from '../redux/contactsSlice/contactsSlice'
import { Link } from 'react-router-dom'
const Items = ({ item }) => {
    const dispatch = useDispatch()
    const handleSubmit = (id) => {
        if(window.confirm('emin misin ?')){
            dispatch(removeContact(id))
        }
    }
    return (

        <div className='itemMain' >
            <div>{item.name} {item.surname}</div>
            <div>{item.number}</div>
            <div style={{display:'flex'}}>
            <Link to={`/edit/${item.id}`} ><button className='btn editBtn' >Edit</button></Link>
            <div><button onClick={()=> handleSubmit(item.id)} className='btn'>x</button></div>
            </div>
          
        </div>
    )
}

export default Items
