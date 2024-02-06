import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contact.contacts.items;

export const selectIsLoading = state => state.contact.isLoading;

export const selectError = state => state.contact.error;

export const selectStatusFilter = state => state.contact.filter;

export const visibleContacts = createSelector([selectContacts, selectStatusFilter], (items, filter) => {
    return items.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
})

