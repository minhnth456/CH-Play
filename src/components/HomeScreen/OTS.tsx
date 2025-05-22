import { ScrollView, Text, View } from 'react-native';
import PressItems from '../PressItems';
import EIcon from 'react-native-vector-icons/Entypo';

export default function OTS() {
    return (
        <View className="BODY_OPTIONS p-4">
            <ScrollView>
                <View className="flex gap-y-4">
                    <PressItems className="p-4">
                        <View className="flex flex-row items-center gap-x-4">
                            <EIcon name="game-controller" size={24} color="#9ca3af" />
                            <Text className="text-gray-400 text-xl">Arcade</Text>
                        </View>
                    </PressItems>
                    <PressItems className="p-4">
                        <View className="flex flex-row items-center gap-x-4">
                            <EIcon name="music" size={24} color="#9ca3af" />
                            <Text className="text-gray-400 text-xl">Music</Text>
                        </View>
                    </PressItems>
                    <PressItems className="p-4">
                        <View className="flex flex-row items-center gap-x-4">
                            <EIcon name="trophy" size={24} color="#9ca3af" />
                            <Text className="text-gray-400 text-xl">Chiến thuật</Text>
                        </View>
                    </PressItems>
                    <PressItems className="p-4">
                        <View className="flex flex-row items-center gap-x-4">
                            <EIcon name="light-bulb" size={24} color="#9ca3af" />
                            <Text className="text-gray-400 text-xl">Đố vui</Text>
                        </View>
                    </PressItems>
                    <PressItems className="p-4">
                        <View className="flex flex-row items-center gap-x-4">
                            <EIcon name="flag" size={24} color="#9ca3af" />
                            <Text className="text-gray-400 text-xl">Đua xe</Text>
                        </View>
                    </PressItems>
                    <PressItems className="p-4">
                        <View className="flex flex-row items-center gap-x-4">
                            <EIcon name="sports-club" size={24} color="#9ca3af" />
                            <Text className="text-gray-400 text-xl">Thể thao</Text>
                        </View>
                    </PressItems>
                </View>
            </ScrollView>
        </View>
    );
}
