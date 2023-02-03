import { configureStore } from '@reduxjs/toolkit';
import { outlayRowsApi } from 'services/outlayRows';
import tableReducer from './slices/table';

export const store = configureStore({
  reducer: {
    tableReducer,
    [outlayRowsApi.reducerPath]: outlayRowsApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(outlayRowsApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
