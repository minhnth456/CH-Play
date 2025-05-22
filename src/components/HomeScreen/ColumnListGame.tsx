import { Dimensions, Image, Text, View } from 'react-native';
import TitleWithArrow from '../TitleWithArrow';
import { FlatList } from 'react-native';
import PressItems from '../PressItems';
import ADIcon from 'react-native-vector-icons/AntDesign';
import { IData } from '../../interfaces/product';

const screenWidth = Dimensions.get('window').width;

export default function ColumnListGame({ products, navigation }: any) {
    function sliceData(data: IData[], size: number) {
        const result = [];
        for (let i = 0; i < data.length; i += size) {
            result.push(data.slice(i, i + size));
        }
        // console.log(result)
        return result;
    }

    const fakeData2 = sliceData(products, 3);

    return (
        <View className="DEXUAT_QUANGCAO pt-4">
            <TitleWithArrow title="Được đề xuất cho bạn" adv={true} eIcon={true} className="px-4 py-6" />

            <View className="DEXUAT_GAME pl-2">
                {/* <ScrollView horizontal> */}
                <View className="GAMES_CONTAINER flex flex-row">
                    <FlatList
                        data={fakeData2}
                        keyExtractor={(_, index) => index.toString()}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <View className="flex gap-y-1">
                                {item.map((productItem: any) => (
                                    <PressItems key={productItem.id} onScale navigation={navigation} navigationTo="Detail" className="rounded-xl p-2">
                                        <View key={productItem.id} style={{ width: screenWidth * 4 / 5 }} className="GAMES flex flex-row gap-x-4">
                                            <Image className="w-[60px] h-[60px] rounded-xl" source={{ uri: productItem.avatar }} />
                                            <View className="flex flex-col justify-between">
                                                <Text className="text-white">{productItem.name}</Text>
                                                <View className="flex flex-row gap-x-2">
                                                    <Text className="text-[12px] text-gray-400">{productItem.categories.join(' • ')}</Text>
                                                </View>
                                                <View className="flex flex-row gap-x-4">
                                                    <Text className="text-gray-400 text-[12px]">{productItem.rate} <ADIcon name="star" size={10} color="#C0C0C0" /> </Text>
                                                    <Text className="text-gray-400 text-[12px]">{productItem.memmory} <Text>MB</Text> </Text>
                                                </View>
                                            </View>
                                        </View>
                                    </PressItems>
                                ))}
                            </View>
                        )}
                    />
                </View>
            </View>
        </View>
    );
}
