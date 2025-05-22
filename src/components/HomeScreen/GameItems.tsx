import { Dimensions, Image, Text, View } from 'react-native';
import ADIcon from 'react-native-vector-icons/AntDesign';
import PressItems from '../PressItems';
import { IData } from '../../interfaces/product';

const screenWidth = Dimensions.get('window').width;

const GameItems = ({ items, navigation }: { items: IData, navigation: any }) => {

    return (
        <PressItems onScale navigation={navigation} navigationTo="Detail" itemNavigation={items} className="p-2 rounded-xl">
            <View style={{ width: screenWidth * 3 / 4 }} className={`GAMES_CONTAINER flex justify-between gap-y-2`}>
                <Image className={`w-full h-[150px] rounded-xl`} source={{ uri: items.banner }} />
                <View className="flex flex-row gap-x-4">
                    <Image className="w-[60px] h-[60px] rounded-xl" source={{ uri: items.avatar }} />
                    <View className="flex flex-col justify-between flex-1">
                        <Text numberOfLines={1} className="text-white overflow-hidden">{items.name}</Text>
                        <View className="flex flex-row gap-x-2 flex-1 items-center overflow-hidden text-ellipsis">
                            <Text className="text-[12px] text-gray-400">{items.categories.join(' • ')}</Text>
                            {/* <Text className="text-gray-400 text-[12px]">Nhập vai</Text> */}
                        </View>
                        <View className="flex flex-row gap-x-4">
                            <Text className="text-gray-400 text-[12px]">{items.rate} <ADIcon name="star" size={10} color="#C0C0C0" /> </Text>
                            <Text className="text-gray-400 text-[12px]">{items.memory} <Text>MB</Text> </Text>
                        </View>
                    </View>
                </View>
            </View>
        </PressItems>
    );
};

export default GameItems;
