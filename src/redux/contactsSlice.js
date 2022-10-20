import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.fulfilled]: (state, { payload }) => {
      return { ...state, items: [...payload] };
    },
    [fetchContacts.pending]: state => {
      return { ...state, isLoading: true };
    },
    [fetchContacts.rejected]: (state, { payload }) => {
      return { ...state, error: payload };
    },

    [addContact.fulfilled]: (state, { payload }) => {
      console.log(payload);
      return { ...state, items: [...state.items, ...payload] };
    },
    [addContact.pending]: state => {
      return { ...state, isLoading: true };
    },
    [addContact.rejected]: (state, { payload }) => {
      return { ...state, error: payload };
    },

    [deleteContact.fulfilled]: (state, { payload }) => {
      return { ...state, items: [...payload] };
    },
    [deleteContact.pending]: state => {
      return { ...state, isLoading: true };
    },
    [deleteContact.rejected]: (state, { payload }) => {
      return { ...state, error: payload };
    },

    // [addContact.fulfilled]: {
    //   reducer(state, { payload }) {
    //     return [...state, payload];
    //   },
    //   prepare(name, number) {
    //     return {
    //       payload: {
    //         id: nanoid(),
    //         name: name,
    //         number: number,
    //       },
    //     };
    //   },

    // reducers: {
    //   addContact:
    //   },

    //   deleteContact(state, action) {
    //     return [...state.filter(contact => contact.id !== action.payload)];
    //   },
  },
});

console.log(contactsSlice.reducer);

// export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
