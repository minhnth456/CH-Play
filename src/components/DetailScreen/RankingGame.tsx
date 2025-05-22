import { Text, View } from 'react-native';
import TitleWithArrow from '../TitleWithArrow';
import FIcon from 'react-native-vector-icons/Feather';
import FAIcon from 'react-native-vector-icons/FontAwesome';

export default function RankingGame() {
    return (
        <View className="RANKING px-6 mb-8">
            <TitleWithArrow title="Xếp hạng và bài đánh giá" className="py-4" />
            <View className="flex flex-row mb-4">
                <Text className="text-gray-400 text-xs">
                    Điểm xếp hạng và bài đánh giá được xác minh và do những người sử dụng cùng lại thiết bị với bạn đưa ra
                    <FIcon name="info" size={12} color="#999999" />
                </Text>
            </View>
            <View className="flex flex-1 flex-row gap-x-8 min-h-[100px]">
                <View className="flex justify-between">
                    <Text className="text-white text-5xl">4,4</Text>
                    <View className="flex gap-y-1">
                        <View className="flex flex-row justify-between">
                            <FAIcon name="star" size={12} color="#00CCFF" />
                            <FAIcon name="star" size={12} color="#00CCFF" />
                            <FAIcon name="star" size={12} color="#00CCFF" />
                            <FAIcon name="star" size={12} color="#00CCFF" />
                            <FAIcon name="star-half-full" size={12} color="#00CCFF" />
                        </View>
                        <Text className="text-gray-400 text-xs font-semibold">11.797</Text>
                    </View>
                </View>
                <View className="flex flex-1">
                    <View className="flex flex-1 flex-row items-center gap-x-4">
                        <Text className="text-white">5</Text>
                        <View className="w-full flex flex-1 h-2 bg-gray-500 rounded-full relative z-0">
                            <View className="bg-blue-400 h-2 rounded-full w-5/6 absolute top-0 left-0 z-10" />
                        </View>
                    </View>
                    <View className="flex flex-1 flex-row items-center gap-x-4">
                        <Text className="text-white">4</Text>
                        <View className="w-full flex flex-1 h-2 bg-gray-500 rounded-full relative z-0">
                            <View className="bg-blue-400 h-2 rounded-full w-[10px] absolute top-0 left-0 z-10" />
                        </View>
                    </View>
                    <View className="flex flex-1 flex-row items-center gap-x-4">
                        <Text className="text-white">3</Text>
                        <View className="w-full flex flex-1 h-2 bg-gray-500 rounded-full relative z-0">
                            <View className="bg-blue-400 h-2 rounded-full w-[10px] absolute top-0 left-0 z-10" />
                        </View>
                    </View>
                    <View className="flex flex-1 flex-row items-center gap-x-4">
                        <Text className="text-white">2</Text>
                        <View className="w-full flex flex-1 h-2 bg-gray-500 rounded-full relative z-0">
                            <View className="bg-blue-400 h-2 rounded-full w-[10px] absolute top-0 left-0 z-10" />
                        </View>
                    </View>
                    <View className="flex flex-1 flex-row items-center gap-x-4">
                        <Text className="text-white">1</Text>
                        <View className="w-full flex flex-1 h-2 bg-gray-500 rounded-full relative z-0">
                            <View className="bg-blue-400 h-2 rounded-full w-1/6 absolute top-0 left-0 z-10" />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}
