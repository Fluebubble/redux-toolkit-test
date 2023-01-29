import { configureStore } from '@reduxjs/toolkit';
import { clicksSlice, persistedClicksReducer } from './slices/clicksSlice';
import { persistedUserReducer, userSlice } from './slices/userSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

// export const store = configureStore({
//   reducer: { user: userSlice.reducer, clicks: persistedClicksReducer },
// });

export const store = configureStore({
  reducer: { user: persistedUserReducer, clicks: persistedClicksReducer },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
