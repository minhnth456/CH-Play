import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderAccount from '../components/HomeScreen/HeaderAccount';
import { useEffect, useState } from 'react';
import HeaderNav from '../components/HomeScreen/HeaderNav';
import axios from 'axios';
import RowListGame from '../components/HomeScreen/RowListGame';
import ColumnListGame from '../components/HomeScreen/ColumnListGame';
import { IData } from '../interfaces/product';

export default function HomeScreen({ navigation }: any) {
    //state quản lý dữ liệu
    const [products, setProducts] = useState<IData[]>([]);
    //fetch dữ liệu
    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get(`http://192.168.10.5:3000/products`);
                // console.log('data', data);
                setProducts(data);
            } catch (error) {
                console.log('Lỗi khi fectch', error);
            }
        };

        fetchData();
    }, []);

    const [selectNav, setSelectNav] = useState<string>('FOR_YOU');

    const renderScreen = () => {
        switch (selectNav) {
            default:
                return (
                    <>
                        {/* ĐỀ XUẤT  */}
                        <RowListGame products={products} navigation={navigation} />

                        {/* QUẢNG CÁO  */}
                        <ColumnListGame products={products} navigation={navigation} />
                        <ColumnListGame products={products} navigation={navigation} />
                    </>
                );
        }
    };

    return (
        <View className="bg-black flex-1">
            <ScrollView>
                <SafeAreaView>
                    <View className="Header-Container">
                        {/* HEADER ACCOUNT  */}
                        <HeaderAccount navigation={navigation} />

                        {/* THANH ĐIỀU HƯỚNG  */}
                        <HeaderNav setSelectNav={setSelectNav} />
                    </View>
                    {/* BODY  */}
                    <View className="Body-Container">
                        {renderScreen()}
                    </View>
                </SafeAreaView >
            </ScrollView >
        </View >
    );
}
