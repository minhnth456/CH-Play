import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
function countTotal(state: any) {
    return state.reduce((prevValue: number, current: any) => prevValue + current.item.price * current.quantity, 0);
}

export const getCartData = createAsyncThunk('cart/getCartData', async (id: number) => {
    console.log('id fetch: ', id);
    const response = await axios.get(`http://192.168.10.5:3000/carts/${id}`);
    console.log('dữ liệu back-end: ', response.data);
    return response.data;
});

export const createCart = createAsyncThunk('cart/createCart', async (data: any) => {
    const response = await axios.post(`http://192.168.10.5:3000/carts`, data);
    return response.data;
});

export const saveCart = createAsyncThunk('cart/saveCart', async (data: any) => {
    // console.log('data fetch: ', data);
    // const response = await axios.put(`http://192.168.10.5:3000/carts/${data.cartId}`, data.cartItems);
    // return response.data;
    const fetchCartData = await axios.get(`http://192.168.10.5:3000/carts/${data.cartId}`);
    const response = await axios.put(`http://192.168.10.5:3000/carts/${data.cartId}`,
        { ...fetchCartData.data, products: data.cartItems.products, total: data.cartItems.total }
    );
    // console.log('lưu cart: ', response.data);
    return response.data;
});

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: [],
        total: 0,
        status: 'idle',
        error: null as string | null,
    },
    reducers: {
        addToCart(state, action) {
            // console.log('payload: ', action.payload);
            const exitProduct = state.products.findIndex(({ item }: any) => item.id === action.payload.id);
            if (exitProduct > -1) {
                state.products[exitProduct].quantity += 1;
                state.total = countTotal(state.products);
                return;
            }
            state.products.push({ item: action.payload, quantity: 1 });
            state.total = countTotal(state.products);
        },
        removeFromCart(state, action) {
            state.products = state.products.filter(({ item }: any) => item.id !== action.payload.id);
            state.total = countTotal(state.products);
            if (state.total < 0) { state.total = 0; };
        },
        updateQuantity(state, action) {
            const findIndexItem = state.products.findIndex(({ item }: any) => item.id === action.payload.id);
            if (findIndexItem > -1) {
                state.products[findIndexItem].quantity = action.payload.quanti;
                state.total = countTotal(state.products);
            }
        },
        increseaQuantity(state, action) {
            const findIndexItem = state.products.findIndex(({ item }: any) => item.id === action.payload);
            if (findIndexItem > -1) {
                state.products[findIndexItem].quantity += 1;
                state.total = countTotal(state.products);
            }
            return;
        },
        decreseaQuantity(state, action) {
            const findIndexItem = state.products.findIndex(({ item }: any) => item.id === action.payload);
            if (findIndexItem > -1) {
                if (state.products[findIndexItem].quantity > 1) {
                    state.products[findIndexItem].quantity -= 1;
                    state.total = countTotal(state.products);
                }
                return;
            }
            return;
        },
        saveFromStorage(state, action) {
            // console.log('action: ', action.payload);
            state.products = action.payload.products;
            state.total = action.payload.total;
            state.error = action.payload.error;
            state.status = action.payload.status;
            return;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCartData.pending, (state: any) => {
                state.status = 'loading';
            })
            .addCase(getCartData.fulfilled, (state: any, action: any) => {
                // console.log('payload: ', action.payload);
                state.status = 'successed';
                state.products = action.payload.products;
                state.total = action.payload.total;

            })
            .addCase(getCartData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message ?? null;
            })
            .addCase(createCart.pending, (state: any) => {
                state.status = 'loading';
            })
            .addCase(createCart.fulfilled, (state: any, action: any) => {
                state.status = 'successed';
                state.products = action.payload.products;
                state.total = action.payload.total;
            })
    }
});

export const { addToCart, removeFromCart, updateQuantity, increseaQuantity, decreseaQuantity, saveFromStorage } = cartSlice.actions;
export default cartSlice.reducer;