import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import EIcon from 'react-native-vector-icons/Entypo';
import TagGame from '../TagGame';
import TitleWithArrow from '../TitleWithArrow';
import PressItems from '../PressItems';
import ADIcon from 'react-native-vector-icons/AntDesign';
import { FlatList } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default function TE({ products, navigation }: any) {
    return (
        <View style={styles.container}>
            <View style={styles.centerRowGap4PX8PY4}>
                <Text style={styles.bigTitle}>
                    Mọi ứng dụng trong phần này đều được giáo viên phê duyệt
                </Text>
                <PressItems onScale>
                    <Text style={styles.textPressItems}>Tìm hiểu thêm</Text>
                </PressItems>
            </View>
            <View style={styles.flexRowGap4P4}>
                <Text style={styles.textGrayXL}>Duyệt qua theo độ tuổi</Text>
                <View style={styles.flexRowColGap1}>
                    <TagGame title="5 tuổi trở xuống" style={styles.tagGame} />
                    <TagGame title="6-8 tuổi" style={styles.tagGame} />
                    <TagGame title="9-12 tuổi" style={styles.tagGame} />
                </View>
            </View>
            <View style={styles.flexRowGap2PX4}>
                <PressItems style={styles.pressItem} onScale navigation={navigation} navigationTo="Detail" itemNavigation={products[0]}>
                    <View style={styles.gamesContainer}>
                        <Image resizeMode="stretch" style={styles.imageBanner} source={{ uri: products[0].banner }} />
                        <View style={styles.row}>
                            <Image style={styles.avatar} source={{ uri: products[0].avatar }} />
                            <View style={styles.col}>
                                <Text style={styles.name} numberOfLines={1}>{products[0].name}</Text>
                                <View style={styles.categories}>
                                    <Text style={styles.textGray}>{products[0].publisher}</Text>
                                </View>
                                <View style={styles.rating}>
                                    <Text style={styles.ratingText}>{products[0].rate} <ADIcon name="star" size={10} color="#C0C0C0" /> </Text>
                                    <Text style={styles.ratingText}>{products[0].memory} <Text>MB</Text> </Text>
                                </View>
                            </View>
                            <View style={styles.viewInstall}>
                                <Text style={styles.textInstall}>Cài đặt</Text>
                                <Text style={styles.textGrayXS}>Mua hàng trong ứng dụng</Text>
                            </View>
                        </View>
                    </View>
                </PressItems>
            </View>
            <View style={styles.viewPX2}>
                <TitleWithArrow title="Mới và vừa cập nhật" style={styles.titleWithArrow} />
                <FlatList
                    data={products}
                    keyExtractor={(_, index) => index.toString()}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    initialNumToRender={2}
                    maxToRenderPerBatch={2}
                    windowSize={11}
                    renderItem={({ item }: any) => (
                        <PressItems onScale style={styles.viewGame} navigation={navigation} navigationTo="Detail" itemNavigation={item}>
                            <View style={styles.viewGameContainer}>
                                <Image style={styles.imageGame} source={{ uri: item.avatar }} />
                                <Text style={styles.textWhite} numberOfLines={2}>{item.name}</Text>
                                <View style={styles.flexRowItemCenter1}>
                                    <View style={styles.flexRowItemCenter2}>
                                        <Text style={styles.textGraySM}>{item.rate}</Text>
                                        <EIcon name="star" size={12} color="#9ca3af" />
                                    </View>
                                    <Text style={styles.textGraySM}>{item.memory} MB</Text>
                                </View>
                            </View>
                        </PressItems>
                    )}
                />
            </View>
            <View style={styles.viewPX2}>
                <TitleWithArrow title="Đề xuất cho bạn" style={styles.titleWithArrow} />
                <FlatList
                    data={products}
                    keyExtractor={(_, index) => index.toString()}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    initialNumToRender={2}
                    maxToRenderPerBatch={2}
                    windowSize={11}
                    renderItem={({ item }: any) => (
                        <PressItems onScale style={styles.viewGame} navigation={navigation} navigationTo="Detail" itemNavigation={item}>
                            <View style={styles.viewGameContainer}>
                                <Image style={styles.imageGame} source={{ uri: item.avatar }} />
                                <Text style={styles.textWhite} numberOfLines={2}>{item.name}</Text>
                                <View style={styles.flexRowItemCenter1}>
                                    <View style={styles.flexRowItemCenter2}>
                                        <Text style={styles.textGraySM}>{item.rate}</Text>
                                        <EIcon name="star" size={12} color="#9ca3af" />
                                    </View>
                                    <Text style={styles.textGraySM}>{item.memory} MB</Text>
                                </View>
                            </View>
                        </PressItems>
                    )}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    textGraySM: {
        color: '#9ca3af',
        fontSize: 12,
        lineHeight: 20,
    },
    flexRowItemCenter1: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 8,
    },
    flexRowItemCenter2: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 2,
    },
    flexRowItemCenterColGap8: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 8,
    },
    textWhite: {
        color: '#fff',
    },
    imageGame: {
        width: '100%',
        height: 112,
        borderRadius: 12,
    },
    viewGameContainer: {
        display: 'flex',
        rowGap: 8,
        width: screenWidth * 1 / 4,
    },
    viewGame: {
        display: 'flex',
        flexDirection: 'row',
        padding: 9,
        columnGap: 16,
        borderRadius: 12,
    },
    titleWithArrow: {
        paddingHorizontal: 16,
        paddingVertical: 16,
    },
    viewPX2: {
        paddingHorizontal: 8,
    },
    textGrayXS: {
        color: '#9ca3af',
        fontSize: 12,
        lineHeight: 16,
    },
    textInstall: {
        paddingHorizontal: 16,
        paddingVertical: 4,
        borderRadius: 9999,
        color: '#fff',
        backgroundColor: '#0e7490',
    },
    viewInstall: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textGray: {
        color: '#9ca3af',
    },
    pressItem: {
        padding: 8,
        borderRadius: 12,
    },
    gamesContainer: {
        width: '100%', // screenWidth * 3 / 4
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: 8,
    },
    imageBanner: {
        width: '100%',
        height: 200,
        borderRadius: 12,
    },
    row: {
        display: 'flex',
        alignItems: 'center',
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
    flexRowBetween: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    bannerRGame: {
        width: '100%',
        height: 200,
        borderRadius: 12,
    },
    flexRowGap2PX4: {
        display: 'flex',
        rowGap: 8,
        paddingHorizontal: 8,
    },
    tagGame: {
        paddingHorizontal: 16,
    },
    flexRowColGap1: {
        display: 'flex',
        flexDirection: 'row',
        columnGap: 4,
    },
    textGrayXL: {
        color: '#9ca3af',
        fontSize: 20,
        lineHeight: 28,
    },
    flexRowGap4P4: {
        display: 'flex',
        rowGap: 16,
        padding: 16,
    },
    textPressItems: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 9999,
        color: '#fff',
        backgroundColor: '#0e7490',
    },
    bigTitle: {
        color: '#fff',
        fontSize: 24,
        lineHeight: 32,
        textAlign: 'center',
    },
    centerRowGap4PX8PY4: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        rowGap: 16,
        paddingHorizontal: 32,
        paddingVertical: 16,
    },
    container: {
        display: 'flex',
        rowGap: 16,
    },
})