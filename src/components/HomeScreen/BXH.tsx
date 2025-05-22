import { ScrollView, View, Text, FlatList, Image, StyleSheet } from 'react-native';
import EIcon from 'react-native-vector-icons/Entypo';
import { IData } from '../../interfaces/product';
import Classify from './Classify';
import PressItems from '../PressItems';

const ItemSeparatorComponent = () => <View style={styles.itemSeparator} />;

export default function BXH({ products, navigation }: { products: IData[], navigation: any }) {
    // console.log('BXh')
    if (products.length === 0) {
        return (
            <View style={styles.containerLoading}>
                <Text style={styles.textWhite}>Đợi load dữ liệu....</Text>
            </View>
        );
    }
    return (
        <View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.viewInScroll}>
                    <Classify title="Miễn phí phổ biến" moreOption={true} />
                    <Classify title="Danh mục" moreOption={true} />
                    <Classify title="Mới" />
                </View>
            </ScrollView>

            <View style={styles.viewFlatlist}>
                <FlatList
                    data={products}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item, index }) => (
                        <PressItems
                            onScale={true}
                            style={styles.pressItem}
                            navigation={navigation}
                            navigationTo="Detail"
                            itemNavigation={item}
                        >
                            <View style={styles.viewContainerPress}>
                                <View style={styles.viewCenter}>
                                    <Text style={styles.textGrayLg}>{index + 1}</Text>
                                </View>
                                <Image style={styles.avatar} source={{ uri: item.avatar }} />
                                <View style={styles.viewStart}>
                                    <Text style={styles.textWhiteLg}>{item.name}</Text>
                                    <Text style={styles.textGraySm}>
                                        {item.categories.join(' • ')}
                                    </Text>
                                    <View style={styles.rowItemCenter}>
                                        <View style={styles.rowItemCenter2}>
                                            <Text style={styles.textGraySm}>{item.rate}</Text>
                                            <EIcon name="star" size={12} color="#9ca3af" />
                                        </View>
                                        <Text style={styles.textGraySm}>{item.memory} MB</Text>
                                    </View>
                                </View>
                            </View>
                        </PressItems>
                    )}
                    ItemSeparatorComponent={ItemSeparatorComponent}
                />
            </View>
        </View >
    );
}

export const styles = StyleSheet.create({
    containerLoading: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#000',
    },
    textWhite: {
        color: '#fff',
    },
    viewInScroll: {
        display: 'flex',
        flexDirection: 'row',
        columnGap: 16,
        padding: 16,
    },
    viewFlatlist: {
        paddingTop: 8,
        paddingBottom: 8,
    },
    pressItem: {
        borderRadius: 6,
        paddingLeft: 32,
        paddingTop: 8,
        paddingBottom: 8,
    },
    viewContainerPress: {
        display: 'flex',
        flexDirection: 'row',
        columnGap: 20,
    },
    viewCenter: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textWhiteLg: {
        color: '#fff',
        fontSize: 18,
        lineHeight: 28,
    },
    textGrayLg: {
        color: '#9ca3af',
        fontSize: 18,
        lineHeight: 28,
    },
    avatar: {
        width: 70,
        height: 70,
        borderRadius: 16,
    },
    viewStart: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    textGraySm: {
        color: '#9ca3af',
        fontSize: 14,
        lineHeight: 20,
    },
    rowItemCenter: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 16,
    },
    rowItemCenter2: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemSeparator: {
        width: '100%',
        height: 16,
        paddingTop: 8,
        paddingBottom: 8,
    },
})