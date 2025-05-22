import { Dimensions, Image, Pressable, ScrollView, Text, TouchableHighlight, View } from 'react-native';
import ADIcon from 'react-native-vector-icons/AntDesign';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FIcon from 'react-native-vector-icons/Feather';
import { Modal } from 'react-native';
import { IData } from '../../interfaces/product';
import { useState } from 'react';

const screenWidth = Dimensions.get('window').width;

export default function HeaderGame({ data }: { data: IData }) {
    const [visiable, setVisiable] = useState<boolean>(false);

    return (
        <>
            <View className={`HEADER_APP px-6 flex flex-row gap-x-8 mb-2`}>
                <Image className="w-[70px] h-[70px] rounded-xl" source={{ uri: data.avatar }} />
                <View className="flex gap-y-4 w-[220px]">
                    <Text numberOfLines={2} className="text-white text-2xl">{data.name}</Text>
                    <View className="flex gap-y-1">
                        <Text className="text-blue-400 text-sm font-bold">{data.publisher}</Text>
                        <Text className="text-gray-400 text-sm">Mua hàng trong ứng dụng</Text>
                    </View>
                </View>
            </View>
            <View className="RATING_APP mb-2">
                <ScrollView horizontal={true}>
                    <View className="flex pl-6 justify-center items-center">
                        <View className="flex flex-row justify-center items-center gap-x-1">
                            <Text className="text-white text-sm">4,4</Text>
                            <ADIcon name="star" size={12} color="#0099FF" />
                        </View>
                        <View className="flex flex-row justify-center items-center gap-x-1">
                            <Text className="text-gray-400 text-sm">11N</Text>
                            <Text className="text-gray-400 text-sm">bài đánh giá</Text>
                        </View>
                    </View>

                    <View className="flex justify-center items-center px-4">
                        <View className="w-[1px] h-6 bg-gray-400" />
                    </View>

                    <View className="flex items-center px-5">
                        <MCIcon name="download-box-outline" size={22} color="#999999" />
                        <View className="flex flex-row gap-x-1">
                            <Text className="text-gray-400 text-sm">{data.memory}</Text>
                            <Text className="text-gray-400 text-sm">MB</Text>
                        </View>
                    </View>

                    <View className="flex justify-center items-center px-4">
                        <View className="w-[1px] h-6 bg-gray-400" />
                    </View>

                    <View className="flex flex-1 justify-center items-center">
                        <Pressable onPress={() => { console.log('Modal'); setVisiable(true); }}>
                            <View className="flex flex-row justify-center mb-1">
                                <View className="flex flex-row bg-white px-[2px]">
                                    <Text className="text-black text-sm font-bold">{data.age}+</Text>
                                </View>
                            </View>
                            <View className="flex flex-row items-center gap-x-1">
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

                    <View className="flex justify-center items-center px-4">
                        <View className="w-[1px] h-6 bg-gray-400" />
                    </View>

                    <View className="flex justify-center items-center gap-y-1 pr-4">
                        <Text className="text-white">Hơn 100 N</Text>
                        <Text className="text-gray-400 text-xs">Lượt tải xuống</Text>
                    </View>

                </ScrollView>
            </View>

            <View className="INSTALL_APP px-4">
                <TouchableHighlight onPress={() => console.log('Cài đặt!')} underlayColor="#99FFFF" className="bg-blue-300 rounded-full py-3 flex justify-center items-center">
                    <Text>Cài đặt</Text>
                </TouchableHighlight>
            </View>
        </>
    );
}
