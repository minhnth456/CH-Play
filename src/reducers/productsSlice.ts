import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await axios.get('http://192.168.10.5:3000/products');
    return response.data;
})

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
        error: null as string | null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message ?? null;
            })
    },
})

export default productsSlice.reducer;