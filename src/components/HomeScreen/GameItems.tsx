import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import ADIcon from 'react-native-vector-icons/AntDesign';
import PressItems from '../PressItems';
import { IData } from '../../interfaces/product';

const screenWidth = Dimensions.get('window').width;

const GameItems = ({ items, navigation }: { items: IData, navigation: any }) => {
    return (

        <PressItems style={styles.pressItem} onScale navigation={navigation} navigationTo="Detail" itemNavigation={items}>
            <View style={styles.gamesContainer}>
                <Image style={styles.imageBanner} source={{ uri: items.banner }} />
                <View style={styles.row}>
                    <Image style={styles.avatar} source={{ uri: items.avatar }} />
                    <View style={styles.col}>
                        <Text style={styles.name} numberOfLines={1}>{items.name}</Text>
                        <View style={styles.categories}>
                            <Text style={styles.categoryText}>{items.categories.join(' • ')}</Text>
                            {/* <Text className="text-gray-400 text-[12px]">Nhập vai</Text> */}
                        </View>
                        <View style={styles.rating}>
                            <Text style={styles.ratingText}>{items.rate} <ADIcon name="star" size={10} color="#C0C0C0" /> </Text>
                            <Text style={styles.ratingText}>{items.memory} <Text>MB</Text> </Text>
                        </View>
                    </View>
                </View>
            </View>
        </PressItems>
    );
};

export const styles = StyleSheet.create({
    pressItem: {
        padding: 8,
        borderRadius: 12,
    },
    gamesContainer: {
        width: screenWidth * 3 / 4, // screenWidth * 3 / 4
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: 8,
    },
    imageBanner: {
        width: '100%',
        height: 150,
        borderRadius: 12,
    },
    row: {
        flexDirection: 'row',
        gap: 16,
    },
    col: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'column',
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 16,
    },
    name: {
        color: 'white',
        fontSize: 16,
        overflow: 'hidden',
    },
    categories: {
        flexDirection: 'row',
        gap: 8,
    },
    categoryText: {
        color: '#888',
        fontSize: 12,
    },
    rating: {
        flexDirection: 'row',
        gap: 16,
    },
    ratingText: {
        color: '#888',
        fontSize: 12,
    },
});

export default GameItems;
