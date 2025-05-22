import { Animated, Dimensions, Image, Modal, Pressable, Text, View, StyleSheet } from 'react-native';
import PressItems from '../PressItems';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import FIcon from 'react-native-vector-icons/Feather';
import ADIcon from 'react-native-vector-icons/AntDesign';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../reducers/authSlice';

const screenWidth = Dimensions.get('window').width;

export default function HeaderAccount({ navigation }: any) {
    const user = useSelector((state: any) => state.auth.user);
    const dispatch = useDispatch();
    //Modal Account
    const [visiableAccount, setVisiableAccount] = useState<boolean>(false);
    //Quantity card
    const products = useSelector((state: any) => state.cart.products);

    const viewAnimation = (pressed: any) => ({
        borderRadius: 9999,
        backgroundColor: pressed ? ' #374151' : 'transparent',
        padding: 8,
    });

    const viewAnimation2 = (pressed: any) => ({
        borderRadius: 9999,
        backgroundColor: pressed ? ' #374151' : 'transparent',
        padding: 8,
    });

    return (
        <View style={styles.header1}>
            <View className="LOGO">
                <Image style={styles.logo} source={require('../../assets/ch-play.png')} />
            </View>
            <View style={styles.account} className="ACCOUNT">
                <View className="CART">
                    <PressItems style={styles.pressItems} navigation={navigation} navigationTo="Cart">
                        {products?.length > 0
                            ?
                            <>
                                <FIcon name="shopping-cart" size={20} color="#FFF" />
                                <View style={styles.redCirleCart}>
                                    <Text style={styles.textCirle}>{products?.length}</Text>
                                </View>
                            </>
                            :
                            <>
                                <FIcon name="shopping-cart" size={20} color="#FFF" />
                            </>
                        }

                    </PressItems>
                </View>
                <View className="NOTIFI">
                    <PressItems style={styles.pressItems} navigation={navigation} navigationTo="Notifi">
                        <>
                            <MIcon name="notifications-none" size={26} color="#FFF" />
                            <View style={styles.redCirle}>
                                <Text style={styles.textCirle}>1</Text>
                            </View>
                        </>
                    </PressItems>
                </View>
                <PressItems className='p-2 rounded-full' onScale action={() => setVisiableAccount(true)}>
                    <Image className='w-8 h-8 rounded-full' source={{ uri: user.avatar }} />
                </PressItems>
                <Modal
                    visible={visiableAccount}
                    transparent={true}
                    animationType="fade"
                    onRequestClose={() => setVisiableAccount(false)}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.bgModel}>
                            <View style={styles.rowCenter}>
                                <Pressable onPress={() => setVisiableAccount(false)}>
                                    {({ pressed }) => (
                                        <Animated.View style={viewAnimation2(pressed)}>
                                            <FIcon name="x" size={22} color="#FFFFFF" />
                                        </Animated.View>
                                    )}
                                </Pressable>
                                <Text style={styles.google}>Google</Text>
                                <View style={styles.emptySpace} />
                            </View>
                            <View style={styles.mT}>
                                <View style={styles.smallContainerModal}>
                                    <View style={styles.rowGapX4}>
                                        <Image className='w-14 h-14 rounded-full' source={{ uri: user.avatar }} />
                                        <View style={styles.colGrowGapY4}>
                                            <View style={styles.flexGapY1}>
                                                <Text style={styles.textWhite}>Minh Hoàng</Text>
                                                <Text style={styles.textGrayXS}>{user.email}</Text>
                                            </View>
                                            <View style={styles.flexRow}>
                                                <Pressable onPress={() => dispatch(logOut())}>
                                                    <Text style={styles.textPressable}>Đăng xuất</Text>
                                                </Pressable>
                                            </View>
                                        </View>
                                        <View style={styles.flexItemCenter}>
                                            <View style={styles.accMoreOption}>
                                                <ADIcon name="caretdown" size={14} color="#FFFFFF" />
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    accMoreOption: {
        borderWidth: 2,
        borderColor: '#374151',
        borderRadius: 9999,
        padding: 6,
    },
    flexItemCenter: {
        display: 'flex',
        alignItems: 'center',
    },
    textPressable: {
        backgroundColor: '#374151',
        color: '#fff',
        borderWidth: 1,
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 8,
    },
    flexRow: {
        display: 'flex',
        flexDirection: 'row',
    },
    textGrayXS: {
        color: '#9ca3af',
        fontSize: 12,
        lineHeight: 16,
    },
    textWhite: {
        color: '#fff',
    },
    flexGapY1: {
        display: 'flex',
        rowGap: 4,
    },
    colGrowGapY4: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        rowGap: 16,
    },
    textWhite2XL: {
        color: '#fff',
        fontSize: 24,
        lineHeight: 32,
    },
    ACC: {
        backgroundColor: '#22c55e',
        borderRadius: 9999,
        width: 48,
        height: 48,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    rowGapX4: {
        display: 'flex',
        flexDirection: 'row',
        columnGap: 16,
    },
    smallContainerModal: {
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        backgroundColor: '#18181b',
        width: '100%',
        paddingHorizontal: 8,
        paddingVertical: 16,
    },
    mT: {
        marginTop: 24,
    },
    emptySpace: {
        width: 32,
        padding: 16,
    },
    google: {
        color: '#fff',
        flexGrow: 1,
        textAlign: 'center',
        fontSize: 20,
        lineHeight: 28,
        fontWeight: 700,
    },
    rowCenter: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bgModel: {
        width: screenWidth * 11 / 12,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        display: 'flex',
        backgroundColor: '#27272a',
        padding: 8,
    },
    modalContainer: {
        display: 'flex',
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#00000090',
    },
    header1: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    logo: {
        width: 40,
        height: 40,
    },
    account: {
        display: 'flex',
        flexDirection: 'row',
        columnGap: 4,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    pressItems: {
        borderRadius: 9999,
        padding: 8,
    },
    redCirle: {
        position: 'absolute',
        top: 4,
        right: 4,
        backgroundColor: '#ef4444',
        borderRadius: 9999,
        width: 20,
        height: 20,
    },
    redCirleCart: {
        position: 'absolute',
        top: 1,
        right: -6,
        backgroundColor: '#ef4444',
        borderRadius: 9999,
        width: 20,
        height: 20,
    },
    textCirle: {
        color: '#fff',
        fontSize: 12,
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: [{ translateX: '-50%' }, { translateY: '-50%' }],
    },
    bgAccount: {
        backgroundColor: '#22c55e',
        borderRadius: 9999,
        width: 32,
        height: 32,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textWhiteLG: {
        color: '#fff',
        fontSize: 18,
        lineHeight: 28,
    },
})