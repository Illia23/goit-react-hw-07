import { createSlice, createSelector } from '@reduxjs/toolkit';
import { fetchContacts } from './contactsOps';
import { addContact } from './contactsOps';
import { deleteContact } from './contactsOps';
import { selectNameFilter } from './filtersSlice';
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    loading: false,
    error: false
  },
   extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchContacts.rejected, (state) => {
        state.error = true;
        state.loading = false;
      })
     // додати addCase для addContacts
     
     .addCase(addContact.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.loading = false;
      })
      .addCase(addContact.rejected, (state) => {
        state.error = true;
        state.loading = false;
      })


      .addCase(deleteContact.pending, (state) => {
        state.error = false;
        state.loading = false;
      })
     .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload.id);
        state.loading = false;
     })
      .addCase(deleteContact.rejected, (state) => {
        state.error = true;
       state.loading = false;
       
      })
  },
});



export const selectError = state => state.contacts.error;
export const selectLoading = state => state.contacts.loading;

export const selectContacts = state => state.contacts.items;

export default contactsSlice.reducer;

export const selectFilteredContacts = createSelector([selectContacts, selectNameFilter],
  (contacts, filter) => {
  return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
})
