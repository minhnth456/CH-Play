/* eslint-disable react-hooks/exhaustive-deps */
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../store/store';
import { createCart, getCartData, saveCart, saveFromStorage } from '../reducers/cartSlice';
import { setCartId } from '../reducers/authSlice';
import { AppState, AppStateStatus } from 'react-native';

export default function useCart() {
    const dispatch = useAppDispatch();
    const itemCart = useSelector((state: any) => state.cart);
    const saveNewItem = useRef(itemCart);

    const user = useSelector((state: any) => state.auth.user);
    const token = useSelector((state: any) => state.auth.token);

    //Fetch Cart
    useEffect(() => {
        console.log('Fetch cart');
        (async () => {
            console.log('user effect fetch cart: ', user);
            if (user && user.cartId !== null) {
                const storeCart = await AsyncStorage.getItem(`cart-user-${user.id}`);
                const parseStoreCart = JSON.parse(storeCart || 'null');
                if (parseStoreCart && parseStoreCart.products?.length !== 0 && parseStoreCart.total !== 0) {
                    dispatch(saveFromStorage(parseStoreCart));
                } else {
                    dispatch(getCartData(user.cartId));
                }
            } else {
                console.log('tao cart moi');
                const response = await dispatch(createCart({ products: [], total: 0 }));
                await dispatch(setCartId({ id: user.id, cartId: response.payload.id, token: token }));
                console.log(`'Tạo thành công cart với với id: ${user.id} cartId: ${response.payload.id} token: ${token}`);
            }
        })();
        return () => {
            dispatch(saveCart({ cartId: saveCartId.current.cartId, cartItems: saveNewItem.current }));
        };
    }, [user]);

    //Save Cart Id
    const saveCartId = useRef(user);
    useEffect(() => {
        saveCartId.current = user;
    }, [user]);

    //Save Item Cart
    useEffect(() => {
        console.log('setItem Cart');
        if (!user.id || !itemCart) { return; }
        saveNewItem.current = itemCart;
        (async () => {
            try {
                await AsyncStorage.setItem(`cart-user-${user.id}`, JSON.stringify(itemCart));
            } catch (errors) {
                console.log('Lỗi khi lưu vào storage: ', errors);
            }
        })();
    }, [itemCart]);

    //Lưu dữ liệu khi thoát app | có cuộc gọi
    const appState = useRef(AppState.currentState);
    useEffect(() => {
        console.log('check user');
        const checkExit = AppState.addEventListener('change', async (nextStepState: AppStateStatus) => {
            console.log('trạng thái ứng dụng: ', nextStepState);
            if (appState.current === 'active' && nextStepState.match(/background|inactive/)) {
                console.log('Phát hiện thoát ứng dụng');
                await dispatch(saveCart({ cartId: saveCartId.current.cartId, cartItems: saveNewItem.current }));
                console.log('Save cart thành công');
            }
            appState.current = nextStepState;
        });
        return () => {
            checkExit.remove();
        };
    }, []);
};