import { createSelector } from "@reduxjs/toolkit";

export const getContacts = (state) => state.contacts.items;
export const getIsLoading = (state) => state.contacts.getIsLoading;
export const getFilter = (state) => state.contacts.filter;
export const getCurrentContact = (state) => state.contacts.currentContact;

export const getVisibleContacts = createSelector([getContacts, getFilter],
    (contacts, filter) => {
        const normalizedFilter = filter.toLowerCase();
        return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
    })

export const getInitialValues = createSelector([getContacts, getCurrentContact],
    (contacts, currentContact) => {
        return contacts.find(contact => contact.id === currentContact);
})

//     export const getVisibleContacts = (state) => {
//     const contacts = getContacts(state);
//     const filter = getFilter(state);
//     const normalizedFilter = filter.toLowerCase();
//     return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
// }
