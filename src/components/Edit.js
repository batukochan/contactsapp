import React from 'react'
import {useParams,useHistory,Redirect} from 'react-router-dom'
import EditForm from './EditForm'
import { contactSelectors } from '../redux/contactsSlice/contactsSlice'
import { useSelector } from 'react-redux'

const Edit = () => {
    const {id} = useParams()
    const contact = useSelector(state => contactSelectors.selectById(state,id))
    const history = useHistory()
    if(!contact){
      return  <Redirect to='/'/>
    }
    console.log(contact)
    return (
        <>
        <EditForm contact={contact} history={history}/>
        </>
    )
}

export default Edit
