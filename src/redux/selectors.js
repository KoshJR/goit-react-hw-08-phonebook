import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectStatusFilter = state => state.filter;

export const visibleContacts = createSelector([selectContacts, selectStatusFilter], (items, filter) => {
    return items.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
})

