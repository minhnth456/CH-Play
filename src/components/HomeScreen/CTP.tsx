import { Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native';
import TitleWithArrow from '../../components/TitleWithArrow';
import EIcon from 'react-native-vector-icons/Entypo';
import PressItems from '../PressItems';

const screenWidth = Dimensions.get('window').width;

export default function CTP({ products, navigation }: any) {
    return (
        <View className="PAY">
            <View style={styles.viewPX2}>
                <TitleWithArrow title="Mới và vừa cập nhật" style={styles.titleWithArrow} />
                <FlatList
                    data={products}
                    keyExtractor={(_, index) => index.toString()}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    initialNumToRender={4}
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
        paddingHorizontal: 8,
        paddingVertical: 16,
    },
    viewPX2: {
        paddingHorizontal: 8,
    },
})