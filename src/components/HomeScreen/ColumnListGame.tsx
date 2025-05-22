import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
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
    // console.log('renderColumnListGame');
    if (products.length === 0) {
        return (
            <View style={styles.containerLoading}>
                <Text style={styles.textWhite}>Đợi load dữ liệu....</Text>
            </View>
        );
    }

    return (
        <View className="DEXUAT_QUANGCAO pt-4">
            <TitleWithArrow style={styles.title} title="Được đề xuất cho bạn" adv={true} eIcon={true} />

            <View style={styles.dexuatGame} className="DEXUAT_GAME">
                {/* <ScrollView horizontal> */}
                <View style={styles.gameContainer} className="GAMES_CONTAINER">
                    <FlatList
                        data={fakeData2}
                        keyExtractor={(_, index) => index.toString() + 2}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        initialNumToRender={2}
                        maxToRenderPerBatch={2}
                        windowSize={11}
                        renderItem={({ item }) => (
                            <View style={styles.flatListContainer}>
                                <FlatList
                                    data={item}
                                    keyExtractor={(productItem, index: number) => productItem.id + index + 3}
                                    renderItem={({ item: productItem }) => (
                                        <PressItems key={productItem.id} onScale navigation={navigation} navigationTo="Detail" itemNavigation={productItem} style={styles.pressItem}>
                                            <View key={productItem.id} style={styles.viewGames} className="GAMES">
                                                <Image style={styles.imageGame} source={{ uri: productItem.avatar }} />
                                                <View style={styles.viewGames2}>
                                                    <Text style={styles.textWhite}>{productItem.name}</Text>
                                                    <View style={styles.viewCategories}>
                                                        <Text style={styles.textGray}>{productItem.categories.join(' • ')}</Text>
                                                    </View>
                                                    <View style={styles.viewGames}>
                                                        <Text style={styles.textGray}>{productItem.rate} <ADIcon name="star" size={10} color="#C0C0C0" /> </Text>
                                                        <Text style={styles.textGray}>{productItem.memory} <Text>MB</Text> </Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </PressItems>
                                    )}
                                />
                            </View>
                        )}
                    />
                </View>
            </View>
        </View>
    );
}

export const styles = StyleSheet.create({
    title: {
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 24,
        paddingBottom: 24,
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
    dexuatGame: {
        paddingLeft: 8,
    },
    gameContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    flatListContainer: {
        display: 'flex',
        rowGap: 4,
    },
    pressItem: {
        borderRadius: 12,
        padding: 8,
    },
    viewGames: {
        display: 'flex',
        flexDirection: 'row',
        columnGap: 16,
        width: screenWidth * 4 / 5,
    },
    imageGame: {
        width: 60,
        height: 60,
        borderRadius: 12,
    },
    viewGames2: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    viewCategories: {
        display: 'flex',
        flexDirection: 'row',
        columnGap: 8,
    },
    textGray: {
        fontSize: 12,
        color: '#9ca3af',
    },
})