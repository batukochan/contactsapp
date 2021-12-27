import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";


export const entityAdapter = createEntityAdapter()

const initialState = entityAdapter.getInitialState()

export const contactSelectors = entityAdapter.getSelectors((state) => state.contacts)

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContact: entityAdapter.addOne
    }

})
export const { addContact } = contactsSlice.actions;
export default contactsSlice.reducer