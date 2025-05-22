/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useAppDispatch } from '../store/store';
import { fetchProducts } from '../reducers/productsSlice';

export default function useFetchProducts() {
    const dispatch = useAppDispatch();

    //Fetch Products
    useEffect(() => {
        console.log('dispacth fetchProducts');
        dispatch(fetchProducts());
    }, []);
};