/* eslint-disable react-hooks/exhaustive-deps */
import { Dimensions, Image, Pressable, ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import ADIcon from 'react-native-vector-icons/AntDesign';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FIcon from 'react-native-vector-icons/Feather';
import { Modal } from 'react-native';
import { IData } from '../../interfaces/product';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../store/store';
import { addToCart } from '../../reducers/cartSlice';
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const screenWidth = Dimensions.get('window').width;

export default function HeaderGame({ data }: { data: IData }) {
    const [visiable, setVisiable] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    // const user = useSelector((state: any) => state.auth.user);
    // const itemCart = useSelector((state: any) => state.cart);
    // useEffect(() => {
    //     AsyncStorage.setItem(`cart-user-${user.id}`, JSON.stringify(itemCart));
    //     console.log('lưu vào storage');
    // }, [dispatch, itemCart]);

    return (
        <>
            <View style={styles.headerApp} className={`HEADER_APP`}>
                <Image style={styles.logo} resizeMode="stretch" source={{ uri: data.avatar }} />
                <View style={styles.viewNameApp} className="flex gap-y-4 flex-grow">
                    <Text style={styles.textWhiteXL} numberOfLines={2}>{data.name}</Text>
                    <View style={styles.viewPublisher}>
                        <Text style={styles.textBlueSM}>{data.publisher}</Text>
                        <Text style={styles.textGraySM}>Mua hàng trong ứng dụng</Text>
                    </View>
                </View>
            </View>
            <View style={styles.ratingApp} className="RATING_APP">
                <ScrollView horizontal={true}>
                    <View style={styles.centerLeft}>
                        <View style={styles.rowCenter}>
                            <Text style={styles.textWhiteSM}>4,4</Text>
                            <ADIcon name="star" size={12} color="#0099FF" />
                        </View>
                        <View style={styles.rowCenter}>
                            <Text style={styles.textGraySM} >11N</Text>
                            <Text style={styles.textGraySM}>bài đánh giá</Text>
                        </View>
                    </View>

                    <View style={styles.centerPX4} className="flex justify-center items-center px-4">
                        <View style={styles.grayColumn} />
                    </View>

                    <View style={styles.centerPX5}>
                        <MCIcon name="download-box-outline" size={22} color="#999999" />
                        <View style={styles.rowGapX4}>
                            <Text style={styles.textGraySM}>{data.memory}</Text>
                            <Text style={styles.textGraySM}>MB</Text>
                        </View>
                    </View>

                    <View style={styles.centerPX4}>
                        <View style={styles.grayColumn} />
                    </View>

                    <View style={styles.centerFlex1}>
                        <Pressable onPress={() => { console.log('Modal'); setVisiable(true); }}>
                            <View style={styles.rowCenterMB}>
                                <View style={styles.rowWhite}>
                                    <Text style={styles.textBlackSMBold}>{data.age}+</Text>
                                </View>
                            </View>
                            <View style={styles.rowItemGap}>
                                <Text className="text-gray-400 text-sm">{data.age} tuổi trở lên</Text>
                                <FIcon name="info" size={12} color="#999999" />
                                <Modal
                                    animationType="fade"
                                    visible={visiable}
                                    transparent={true}
                                    onRequestClose={() => setVisiable(false)}
                                >
                                    <View className={`w-${screenWidth}px h-screen flex justify-center items-center bg-black/50`}>
                                        <View className="w-[200px] bg-gray-800 rounded-xl p-4">
                                            <Text className="text-white font-bold text-[18px] pb-4">{data.age} tuổi trở lên</Text>
                                            <Text className="text-gray-500 pb-4">Bạo lực vừa phải</Text>
                                            <View className="flex items-end justify-end">
                                                <Pressable className="flex justify-end items-end" onPress={() => setVisiable(false)}>
                                                    {({ pressed }) => (
                                                        <Text style={{ backgroundColor: pressed ? '#93c5fd' : 'transparent' }} className="text-blue-400 rounded-md px-2 py-1">Đã hiểu</Text>
                                                    )}

                                                </Pressable>
                                            </View>
                                        </View>
                                    </View>
                                </Modal>
                            </View>
                        </Pressable>
                    </View>

                    <View style={styles.centerPX4}>
                        <View style={styles.grayColumn} />
                    </View>

                    <View style={styles.centerGapYPR}>
                        <Text style={styles.textWhite}>Hơn 100 N</Text>
                        <Text style={styles.textGrayXS}>Lượt tải xuống</Text>
                    </View>

                </ScrollView>
            </View>

            <View className="INSTALL_APP px-4">
                <TouchableHighlight onPress={() => dispatch(addToCart(data))} underlayColor="#99FFFF" className="bg-blue-300 rounded-full py-3 flex justify-center items-center">
                    <Text>Cài đặt</Text>
                </TouchableHighlight>
            </View>
        </>

    );
}

export const styles = StyleSheet.create({
    textGrayXS: {
        color: '#9ca3af',
        fontSize: 12,
        lineHeight: 16,
    },
    textWhite: {
        color: '#fff',
    },
    centerGapYPR: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        rowGap: 4,
        paddingRight: 16,
    },
    rowItemGap: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 4,
    },
    textBlackSMBold: {
        color: '#000',
        fontSize: 14,
        lineHeight: 20,
        fontWeight: 700,
    },
    rowWhite: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#fff',
        paddingHorizontal: 2,
    },
    rowCenterMB: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 4,
    },
    centerFlex1: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    rowGapX4: {
        display: 'flex',
        flexDirection: 'row',
        columnGap: 4,
    },
    centerPX5: {
        display: 'flex',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    grayColumn: {
        width: 1,
        height: 24,
        backgroundColor: '#9ca3af',
    },
    centerPX4: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    textWhiteSM: {
        color: '#fff',
        fontSize: 14,
        lineHeight: 20,
    },
    rowCenter: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        columnGap: 4,
    },
    centerLeft: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 24,
    },
    ratingApp: {
        marginBottom: 8,
    },
    textGraySM: {
        color: '#9ca3af',
        fontSize: 14,
        lineHeight: 20,
    },
    textBlueSM: {
        color: '#60a5fa',
        fontSize: 14,
        lineHeight: 20,
        fontWeight: '700',
    },
    viewPublisher: {
        display: 'flex',
        rowGap: 4,
    },
    textWhiteXL: {
        color: '#fff',
        fontSize: 24,
        lineHeight: 32,
    },
    viewNameApp: {
        display: 'flex',
        rowGap: 16,
        flexGrow: 1,
    },
    logo: {
        width: screenWidth * 3 / 12,
        height: 100,
        borderRadius: 12,
    },
    headerApp: {
        paddingHorizontal: 24,
        display: 'flex',
        flexDirection: 'row',
        columnGap: 24,
        marginBottom: 8,
    },
})