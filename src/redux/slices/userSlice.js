import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { createSlice } from '@reduxjs/toolkit';


export const userSlice = createSlice({
  name: 'user',
  initialState: {
    login: '',
    isLoggedIn: false,
  },
  reducers: {
    logIn(state, action) {
      state.login = action.payload;
      state.isLoggedIn = true;
    },
    logOut(state, action) {
      state.login = '';
      state.isLoggedIn = false;
    },
  },
});

export const persistedUserReducer = persistReducer(
  { key: 'user', storage },
  userSlice.reducer
);

export const { logIn, logOut } = userSlice.actions;
