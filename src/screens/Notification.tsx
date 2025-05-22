
import { Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderNavigate from '../components/HeaderNavigate';
import EIcon from 'react-native-vector-icons/Entypo';


const Notification = ({ navigation }: { navigation: any }) => {
    const getTextStyle = (pressed: boolean) => ({
        backgroundColor: pressed ? '#374151' : 'transparent',
        color: '#3b82f6', // blue-300
        fontSize: 14,
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 9999, // full rounded
    });
    return (
        <View className="bg-black flex flex-1">
            <SafeAreaView>
                <ScrollView>
                    <HeaderNavigate navigation={navigation} title="Thông báo và ưu đãi" moreAction={false} className="px-4 py-2" />
                    <View style={{ backgroundColor: '#33415570' }} className="flex flex-row justify-between px-8 py-4 gap-x-4">
                        <View className="flex">
                            <View className="bg-blue-300 rounded-full p-2">
                                <EIcon name="price-tag" size={24} color="#000077" />
                            </View>
                        </View>
                        <View className="flex flex-1 gap-y-2">
                            <Text className="text-white text-[18px]">Nhận thông tin cập nhật nhanh hơn</Text>
                            <Text className="text-gray-400">
                                Nhận ưu đãi đặc biệt, tiếp cận sớm các tính năng mới và thông tin cập nhật. Nắm bắt thông tin mới nhất nhờ thông báo và email
                            </Text>
                            <View className="flex flex-row justify-end gap-x-2">
                                <Pressable>
                                    {({ pressed }) => (
                                        <Text style={getTextStyle(pressed)} >Để sau</Text>
                                    )}
                                </Pressable>
                                <Pressable>
                                    {({ pressed }) => (
                                        <Text style={getTextStyle(pressed)} >Nhận thông báo</Text>
                                    )}
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View >
    );
};

export default Notification;
