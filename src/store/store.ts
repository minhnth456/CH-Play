import { configureStore } from '@reduxjs/toolkit';
import productsSlice from '../reducers/productsSlice';
import authSlice from '../reducers/authSlice';
import cartSlice from '../reducers/cartSlice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
    reducer: {
        products: productsSlice,
        auth: authSlice,
        cart: cartSlice,
    },
});

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()