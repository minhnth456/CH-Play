/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import BXH from '../components/HomeScreen/BXH';
import ColumnListGame from '../components/HomeScreen/ColumnListGame';
import CTP from '../components/HomeScreen/CTP';
import HeaderAccount from '../components/HomeScreen/HeaderAccount';
import HeaderNav from '../components/HomeScreen/HeaderNav';
import OTS from '../components/HomeScreen/OTS';
import RowListGame from '../components/HomeScreen/RowListGame';
import TE from '../components/HomeScreen/TE';
import useCart from '../hooks/useCart';
import useFetchProducts from '../hooks/useFetchProducts';

export default function HomeScreen({ navigation }: any) {
    //Products
    const products = useSelector((state: any) => state.products.products);
    const status = useSelector((state: any) => state.products.status);
    const error = useSelector((state: any) => state.products.error);

    //Fetch Products
    useFetchProducts();

    //Cart
    useCart();

    //Change Body Home Screen
    const [selectNav, setSelectNav] = useState<string>('FOR_YOU');
    // console.log('renderHomeScreen');
    const renderScreen = () => {
        switch (selectNav) {
            case 'FOR_YOU':
                if (selectNav === 'FOR_YOU') {
                    return (
                        <>
                            {/* ĐỀ XUẤT  */}
                            <RowListGame products={products} navigation={navigation} />

                            {/* QUẢNG CÁO  */}
                            <ColumnListGame products={products} navigation={navigation} />
                            {/* <ColumnListGame products={products} navigation={navigation} /> */}
                        </>
                    );
                }
                return null;
            case 'BANG_XEP_HANG':
                if (selectNav === 'BANG_XEP_HANG') {
                    return <BXH products={products} navigation={navigation} />;
                }
                return null;
            case 'TRE_EM':
                if (selectNav === 'TRE_EM') {
                    return <TE products={products} navigation={navigation} />;
                }
                return null;
            case 'CO_TINH_PHI':
                if (selectNav === 'CO_TINH_PHI') {
                    return <CTP products={products} navigation={navigation} />;
                }
                return null;
            case 'OPTIONS':
                if (selectNav === 'OPTIONS') {
                    return <OTS />;
                }
                return null;
            default:
                return (
                    <Text>Sai đường dẫn</Text>
                );
        }
    };

    if (status === 'loading') {
        return <Text>...Loading</Text>;
    }

    if (status === 'failed') {
        console.log('error', error);
        return <Text>Error</Text>;
    }

    return (
        <View className="bg-black flex-1">
            <SafeAreaView>
                <FlatList
                    data={['header', '1']}
                    keyExtractor={(item) => item}
                    renderItem={({ item }) => {
                        if (item === 'header') {
                            return (
                                <View className="Header-Container">
                                    {/* HEADER ACCOUNT */}
                                    <HeaderAccount navigation={navigation} />
                                    {/* THANH ĐIỀU HƯỚNG */}
                                    <HeaderNav selectNav={selectNav} setSelectNav={setSelectNav} />
                                </View>
                            );
                        }
                        return (
                            <View className="Body-Container">
                                {renderScreen()}
                            </View>
                        );
                    }}
                    showsVerticalScrollIndicator={false}
                />
            </SafeAreaView >
        </View >
    );
}
