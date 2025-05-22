import { Image, Pressable, Text, View } from 'react-native';
import EIcon from 'react-native-vector-icons/Entypo';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import { IComments } from '../../interfaces/product';

const UserComments = ({ numberLine, setNumberLine, data }: { numberLine: string, setNumberLine: any, data: IComments[] }) => {
    const getTextStyle = (pressed: boolean) => ({
        backgroundColor: pressed ? '#9ca3af70' : 'transparent',
    });

    function rating(rate: number) {
        const fullStar = rate;
        const emptyStar = 5 - rate;
        let star = [];

        for (let i = 0; i < fullStar; i++) {
            star.push(<FAIcon key={`starFull-${i}`} name="star" size={12} color="#00CCFF" />);
        }

        for (let i = 0; i < emptyStar; i++) {
            star.push(<FAIcon key={`starEmpty-${i}`} name="star-o" size={12} color="#00CCFF" />);
        }

        return star;
    }

    return (
        <>
            {data.map((item: any) => (
                <View key={item.name} className="flex gap-y-4">
                    <View className="flex flex-row justify-between items-center">
                        <View className="flex flex-row items-center gap-x-4">
                            <Image className="w-10 h-10 rounded-full" source={{ uri: item.avatar }} />
                            <Text className="font-bold text-white">{item.name}</Text>
                        </View>
                        <EIcon name="dots-three-vertical" size={20} color="white" />
                    </View>
                    <View className="flex flex-row items-center gap-x-2">
                        <View className="flex flex-row justify-between">
                            {rating(item.rate)}
                        </View>
                        <Text className="text-white text-xs">{item.date}</Text>
                    </View>
                    <View className="flex gap-y-2">
                        <Pressable onPress={() => setNumberLine((pre: any) => pre === item.id ? '' : item.id)}>
                            {({ pressed }) => (
                                <Text style={getTextStyle(pressed)} numberOfLines={numberLine === item.id ? 0 : 2} className="text-gray-400">
                                    {item.rateComment}
                                </Text>
                            )}
                        </Pressable>
                        <Text className="text-gray-400 text-xs">1 người thấy đánh giá này hữu ích</Text>
                    </View>
                    <View className="flex flex-row justify-between items-center">
                        <Text className="text-gray-400 text-xs">Bài đánh giá này có hữu ích không ?</Text>
                        <View className="flex flex-row items-center gap-x-2">
                            <Text style={{ borderWidth: 1, borderColor: '#374151' }} className="text-gray-400 py-1 px-4 rounded-md text-xs">Có</Text>
                            <Text style={{ borderWidth: 1, borderColor: '#374151' }} className="text-gray-400 py-1 px-4 rounded-md text-xs">Không</Text>
                        </View>
                    </View>
                </View>
            ))}
        </>
    );
};

export default UserComments;
