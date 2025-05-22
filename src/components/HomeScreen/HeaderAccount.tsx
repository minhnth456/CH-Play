import { Animated, Dimensions, Image, Modal, Pressable, Text, View } from 'react-native';
import PressItems from '../PressItems';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import FIcon from 'react-native-vector-icons/Feather';
import ADIcon from 'react-native-vector-icons/AntDesign';
import { useState } from 'react';
import { useAuth } from '../../Contexts/AuthContext';

const screenWidth = Dimensions.get('window').width;

export default function HeaderAccount({ navigation }: any) {
    const { logoutUser } = useAuth();
    //Modal Account
    const [visiableAccount, setVisiableAccount] = useState<boolean>(false);
    return (
        <View className="Header1 flex flex-row justify-between items-center px-4">
            <View className="LOGO">
                <Image className="w-10 h-10" source={require('../../assets/ch-play.png')} />
            </View>
            <View className="ACCOUNT flex flex-row gap-x-2 justify-between items-center">
                <View className="NOTIFI">
                    <PressItems className="rounded-full p-2" navigation={navigation} navigationTo="Notifi">
                        <>
                            <MIcon name="notifications-none" size={26} color="#FFF" />
                            <View className="absolute top-1 right-1 bg-red-500 rounded-full w-5 h-5">
                                <Text className="text-white text-[12px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">5</Text>
                            </View>
                        </>
                    </PressItems>
                </View>

                <Pressable onPress={() => setVisiableAccount(true)}>
                    {({ pressed }) => (
                        <Animated.View style={{ borderRadius: 9999, backgroundColor: pressed ? '#374151' : 'transparent', padding: 8 }}>
                            <View className="ACC bg-green-500 rounded-full w-8 h-8 flex justify-center items-center">
                                <Text className="text-white text-lg">M</Text>
                            </View>
                        </Animated.View>
                    )}
                </Pressable>
                <Modal
                    visible={visiableAccount}
                    transparent={true}
                    animationType="fade"
                    onRequestClose={() => setVisiableAccount(false)}
                >
                    <View style={{ backgroundColor: '#00000090' }} className="flex flex-1 justify-end items-center">
                        <View style={{ width: screenWidth * 11 / 12 }} className={`rounded-tl-3xl rounded-tr-3xl flex bg-zinc-800 px-2 py-2`}>
                            <View className="flex flex-row justify-center items-center">
                                <Pressable onPress={() => setVisiableAccount(false)}>
                                    {({ pressed }) => (
                                        <Animated.View style={{ backgroundColor: pressed ? '#374151' : 'transparent', padding: 4, borderRadius: 9999 }}>
                                            <FIcon name="x" size={22} color="#FFFFFF" />
                                        </Animated.View>
                                    )}
                                </Pressable>
                                <Text className="text-white grow text-center text-xl font-bold">Google</Text>
                                <View className="w-8 p-4" />
                            </View>
                            <View className="mt-6">
                                <View className="rounded-tl-3xl rounded-tr-3xl bg-zinc-900 w-full px-2 py-4">
                                    <View className="flex flex-row gap-x-4">
                                        <View className="ACC bg-green-500 rounded-full w-12 h-12 flex justify-center items-center">
                                            <Text className="text-white text-2xl">M</Text>
                                        </View>
                                        <View className="grow flex flex-col gap-y-4">
                                            <View className="flex gap-y-1">
                                                <Text className="text-white">Minh Hoàng</Text>
                                                <Text className="text-gray-400 text-xs">minhnth456@gmail.com</Text>
                                            </View>
                                            <View className="flex flex-row">
                                                <Pressable onPress={() => logoutUser()}>
                                                    <Text style={{ borderColor: '#374151' }} className="text-white border-[1px] px-4 py-2 rounded-lg">Đăng xuất</Text>
                                                </Pressable>
                                            </View>
                                        </View>
                                        <View className="flex items-center">
                                            <View style={{ borderWidth: 2, borderColor: '#374151', borderRadius: 9999 }} className="p-[6px]">
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
