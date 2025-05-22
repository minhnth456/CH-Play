import { FlatList, View } from 'react-native';
import TitleWithArrow from '../TitleWithArrow';
import GameItems from './GameItems';

const ItemSeparator = () => <View className="w-2" />;

export default function RowListGame({ products, navigation }: any) {
    return (
        <View className="DEXUAT">
            <TitleWithArrow title="Đề xuất cho bạn" className="px-4 py-4" />

            <View className="DEXUAT_GAME pl-2">
                <View className="flex">
                    <FlatList
                        data={products}
                        renderItem={({ item }) => <GameItems items={item} navigation={navigation} />}
                        keyExtractor={(item: any) => item.id}
                        numColumns={1}
                        horizontal={true}
                        ItemSeparatorComponent={ItemSeparator}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </View>
        </View>
    );
}
