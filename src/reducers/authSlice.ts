import AsyncStorage from '@react-native-async-storage/async-storage';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const signUp = createAsyncThunk('auth/signUp', async (value: any) => {
    const response = await axios.post(`http://192.168.10.5:3000/signup`, value);
    await AsyncStorage.setItem('userData', JSON.stringify(response.data));
    console.log('Tạo tk thành công và lưu vào storage với dữ liệu: ', response.data);
    return response.data;
});

export const signIn = createAsyncThunk('auth/signIn', async (value: any) => {
    const response = await axios.post(`http://192.168.10.5:3000/signin`, value);
    // console.log(response.data);
    await AsyncStorage.setItem('userData', JSON.stringify(response.data));
    return response.data;
});

export const setCartId = createAsyncThunk('auth/setCartId', async ({ id, cartId, token }: any) => {
    // const getUserData = await axios.get(`http://192.168.10.5:3000/users/${id}`,
    //     { headers: { Authorization: `Bearer ${token}` } }
    // );
    // const userData = getUserData.data;
    // console.log('userData: ', userData);
    // delete userData.password;
    // console.log('userData', userData);
    // console.log('updateUser', updateUser);

    const response = await axios.patch(`http://192.168.10.5:3000/users/${id}`,
        { cartId: cartId },
        { headers: { Authorization: `Bearer ${token}` } }
    );
    const userToken = await AsyncStorage.getItem('userData');
    const getUserToken = JSON.parse(userToken || 'null');
    const oldToken = getUserToken.accessToken;
    console.log('oldToken: ', oldToken);

    console.log('Sau khi put: ', response.data);
    //Xóa storage cũ, set lại storage với oldToken và dữ liệu mới
    await AsyncStorage.removeItem('userData');
    await AsyncStorage.setItem('userData', JSON.stringify({ accessToken: oldToken, user: response.data }));
    return response.data;
});

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: undefined,
        user: undefined,
        status: 'idle',// 'idle' | 'loading' | 'successful' | 'failed'
        error: null as string | null,
    },
    reducers: {
        logOut(state) {
            AsyncStorage.removeItem('userData');
            state.token = undefined;
            state.user = undefined;
        },
        setDataUser(state, action) {
            state.token = action.payload.accessToken;
            state.user = action.payload.user;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(signIn.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(signIn.fulfilled, (state, action) => {
                state.status = 'successful';
                state.token = action.payload.accessToken;
                state.user = action.payload.user;
                // AsyncStorage.setItem('token', action.payload.accessToken);
                // AsyncStorage.setItem('user', action.payload.user);
            })
            .addCase(signIn.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message ?? null;
            })
            .addCase(signUp.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(signUp.fulfilled, (state, action) => {
                state.status = 'successful';
                state.token = action.payload.accessToken;
                state.user = action.payload.user;
            })
            .addCase(signUp.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message ?? null;
            })
            .addCase(setCartId.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(setCartId.fulfilled, (state, action) => {
                state.status = 'successful';
                state.user = action.payload;
            })
            .addCase(setCartId.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message ?? null;
            });
    },
});

export const { logOut, setDataUser } = authSlice.actions;
export default authSlice.reducer;