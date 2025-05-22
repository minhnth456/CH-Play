import { FlatList, StyleSheet, View } from 'react-native';
import TitleWithArrow from '../TitleWithArrow';
import GameItems from './GameItems';
import { Text } from 'react-native';
import { IData } from '../../interfaces/product';

const ItemSeparator = () => <View style={styles.itemSeparator} />;

export default function RowListGame({ products, navigation }: any) {

    if (products.length === 0) {
        return (
            <View style={styles.containerLoading}>
                <Text style={styles.textWhite}>Đợi load dữ liệu....</Text>
            </View>
        );
    }
    // console.log('renderRowListGame')
    return (
        <View className="DEXUAT">
            <TitleWithArrow title="Đề xuất cho bạn" style={styles.title} />

            <View style={styles.deXuat} className="DEXUAT_GAME">
                <View>
                    <FlatList
                        data={products}
                        renderItem={({ item }) => <GameItems items={item} navigation={navigation} />}
                        keyExtractor={(item: IData, index: number) => item.id + index + 1}
                        numColumns={1}
                        horizontal={true}
                        ItemSeparatorComponent={ItemSeparator}
                        showsHorizontalScrollIndicator={false}
                        initialNumToRender={2}
                        maxToRenderPerBatch={2}
                        windowSize={11}
                    />
                </View>
            </View>
        </View>
    );
}

export const styles = StyleSheet.create({
    title: {
        padding: 16,
    },
    deXuat: {
        paddingLeft: 8,
    },
    containerLoading: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#000',
    },
    textWhite: {
        color: '#fff',
    },
    itemSeparator: {
        width: 8,
    },
})