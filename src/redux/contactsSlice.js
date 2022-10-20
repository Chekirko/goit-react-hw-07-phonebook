import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: {
      reducer(state, action) {
        return [...state, action.payload];
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name: name,
            number: number,
          },
        };
      },
    },

    deleteContact(state, action) {
      return [...state.filter(contact => contact.id !== action.payload)];
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
