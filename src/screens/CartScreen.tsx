import { useState } from 'react';
import { Dimensions, FlatList, Image, Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import EIcon from 'react-native-vector-icons/Entypo';
import { useSelector } from 'react-redux';
import HeaderNavigate from '../components/HeaderNavigate';
import PressItems from '../components/PressItems';
import { decreseaQuantity, increseaQuantity, removeFromCart, updateQuantity } from '../reducers/cartSlice';
import { useAppDispatch } from '../store/store';

const screenWidth = Dimensions.get('window').width;

export default function CartScreen({ navigation }: any) {
    const products = useSelector((state: any) => state.cart.products);
    const total = useSelector((state: any) => state.cart.total);
    const dispatch = useAppDispatch();
    const [visible, setVisible] = useState<boolean>(false);

    const handleUpdateQuantity = (e: any, id: number) => {
        if (e > 0 && e !== '') {
            dispatch(updateQuantity({ quanti: e, id: id }));
        } else {
            dispatch(updateQuantity({ quanti: 1, id: id }));
        }
    };

    return (
        <SafeAreaView className="bg-black flex flex-1">
            <View className="px-4 pb-4 border-b-2 border-gray-800">
                <HeaderNavigate title="Giỏ hàng" navigation={navigation} />
            </View>
            <View>
                <View className="flex flex-row w-full px-4 gap-x-4">
                    <Text className="text-white">STT</Text>
                    <Text className="text-white grow">Products</Text>
                    <Text className="text-white">Quantity</Text>
                    <Text className="text-white">Price</Text>
                    <Text className="text-white"> Delete</Text>
                </View>
                <View className="px-4 w-full">
                    {products?.length > 0
                        ?
                        <FlatList
                            className='flex gap-y-2'
                            data={products}
                            keyExtractor={(item: any) => item.item.id.toString()}
                            renderItem={({ item, index }) => {
                                // console.log('item', item);
                                return (
                                    <View key={item.item.id} className='flex flex-row gap-x-4 mb-4'>
                                        <Text style={{ width: screenWidth / 16 }} className='text-white text-center'>{index + 1}</Text>
                                        <View className='flex grow flex-row gap-x-1'>
                                            <Image className='w-16 h-16 rounded-xl' source={{ uri: item.item.avatar }} />
                                            <View className='flex flex-col flex-1'>
                                                <Text numberOfLines={1} className='text-white'>{item.item.name}</Text>
                                                <Text numberOfLines={2} className='text-gray-400'>{item.item.publisher}</Text>
                                            </View>
                                        </View>
                                        <View style={{ width: screenWidth / 8 }} className='text-white flex flex-row justify-between items-center'>
                                            <Pressable onPress={() => {
                                                if (item.quantity === 1) {
                                                    setVisible(true);
                                                } else {
                                                    dispatch(decreseaQuantity(item.item.id));
                                                }
                                            }}>
                                                <Text className='text-white'>-</Text>
                                            </Pressable>
                                            <Modal onRequestClose={() => setVisible(false)} transparent={true} visible={visible} animationType="none">
                                                <View style={{ backgroundColor: '#00000070' }} className='flex flex-1 justify-center items-center'>
                                                    <View className='rounded-xl bg-slate-800 px-6 py-4 gap-y-6'>
                                                        <Text className='text-white text-lg font-bold'>Giảm số lượng về 0, trò chơi sẽ bị xóa</Text>
                                                        <View className='flex flex-row justify-end gap-x-8'>
                                                            <PressItems action={() => { dispatch(removeFromCart(item.item)); setVisible(false); }} className='py-1 px-2 rounded-md'>
                                                                <Text className='text-red-500 font-semibold'>Xóa</Text>
                                                            </PressItems>
                                                            <PressItems action={() => setVisible(false)} className='py-1 px-2 rounded-md'>
                                                                <Text className='text-gray-400 font-semibold'>Hủy</Text>
                                                            </PressItems>
                                                        </View>
                                                    </View>
                                                </View>
                                            </Modal>
                                            <TextInput onChangeText={(text: string) => handleUpdateQuantity(text, item.item.id)} keyboardType="number-pad" className='text-white'>{item.quantity}</TextInput>
                                            <Pressable onPress={() => dispatch(increseaQuantity(item.item.id))}>
                                                <Text className='text-white'>+</Text>
                                            </Pressable>
                                        </View>
                                        <View className='flex justify-center items-center'>
                                            <Text numberOfLines={1} style={{ width: screenWidth / 9 }} className='text-white'>{item.item.price} $</Text>
                                        </View>
                                        <Pressable className='flex justify-center' onPress={() => dispatch(removeFromCart(item.item))} style={{ width: screenWidth / 14 }}>
                                            <EIcon name='trash' size={20} color='#fff' />
                                        </Pressable>
                                    </View>
                                )
                            }}
                        />
                        :
                        <Text className='text-white w-full text-center'>Giỏ hàng trống....</Text>
                    }

                </View>
                <View className='flex flex-row justify-between px-4'>
                    <Text className='text-white'>Total</Text>
                    <Text className='text-white'>{total} $</Text>
                </View>
            </View>
        </SafeAreaView >
    );
};

const styles = StyleSheet.create({
    productCol: {
        display: 'flex',
        flexDirection: 'row',
        columnGap: 16,
        flexGrow: 1,
        paddingHorizontal: 8,
    },
    pressItem: {
        borderRadius: 6,
        paddingTop: 8,
        paddingBottom: 8,
    },
    viewContainerPress: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    viewCenter: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 8,
    },
    textWhiteLg: {
        color: '#fff',
        fontSize: 18,
        lineHeight: 28,
    },
    textGrayLg: {
        color: '#9ca3af',
        fontSize: 18,
        lineHeight: 28,
    },
    avatar: {
        width: 70,
        height: 70,
        borderRadius: 16,
    },
    viewStart: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    textGraySm: {
        color: '#9ca3af',
        fontSize: 14,
        lineHeight: 20,
    },
    rowItemCenter: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 16,
    },
    rowItemCenter2: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemSeparator: {
        width: '100%',
        height: 16,
        paddingTop: 8,
        paddingBottom: 8,
    },
})