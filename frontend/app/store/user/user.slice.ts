import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { getStoreLocal } from 'utils/user/local-storage'

import { IInitialState } from './user.interface'
import { checkAuth, login, logout, register } from './user.actions'

const initialState: IInitialState = {
	isLoading: false,
	user: getStoreLocal('user'),
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
        builder.addCase(register.pending, state => {
            state.isLoading = true;
        }).addCase(register.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.user = payload.user;
        }).addCase(register.pending, state => {
            state.isLoading = false;
            state.user = null;
        }).addCase(login.pending, state => {
            state.isLoading = true;
        }).addCase(login.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.user = payload.user;
        }).addCase(login.pending, state => {
            state.isLoading = false;
            state.user = null;
        }).addCase(logout.fulfilled, (state) => {
            state.isLoading = false;
            state.user = null;
        }).addCase(checkAuth.fulfilled, (state, {payload}) => {
            state.user = payload.user;
        })
    },
})

export const {} = userSlice.actions

export const { reducer } = userSlice
