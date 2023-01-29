import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

const { createSlice } = require('@reduxjs/toolkit');

export const clicksSlice = createSlice({
  name: 'clicks',
  initialState: { value: 0 },
  reducers: {
    update: state => {
      state.value += 1;
    },
  },
});

const persistClicksConfig = {
  key: 'root',
  storage,
};

export const persistedClicksReducer = persistReducer(
  persistClicksConfig,
  clicksSlice.reducer
);

export const { update } = clicksSlice.actions;

export const getClicksValue = state => state.clicks.value;
