import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = { isLogged: false, profile: '' };
const authSlice=createSlice({
    name: 'auth',
    initialState,
    reducers: {
        toggle(state, data) { 
            state.isLogged=!state.isLogged;
            state.profile=data.payload;
         },
         logout(state) { 
            state.isLogged=false;
            state.profile=null;
         }
    },
});


const store = configureStore({
    reducer: {auth: authSlice.reducer}
});

export const authActions= authSlice.actions;

export default store;
