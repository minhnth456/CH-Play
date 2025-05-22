import { Animated, Dimensions, Modal, ScrollView } from 'react-native';
import { FlatList, Image, Pressable, View } from 'react-native';
import { IData } from '../../interfaces/product';
import { useEffect, useRef, useState } from 'react';
import FIcon from 'react-native-vector-icons/Feather';

const screenWidth = Dimensions.get('window').width;

export default function ImageList({ data }: { data: IData }) {
    const [visiableImages, setVisiableImages] = useState<boolean>(false);
    const flatListRef = useRef<FlatList>(null);
    const [selectIndex, setSelectIndex] = useState(0);

    const handleSelectImages = (index: number) => {
        console.log(index);
        setSelectIndex(index);
    };

    useEffect(() => {
        if (visiableImages && flatListRef.current) {
            flatListRef.current.scrollToIndex({ index: selectIndex });
        }
    }, [visiableImages, selectIndex]);

    return (
        <View className="IMAGES_APP flex mb-4">
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View className="flex flex-row pl-5 gap-x-4">
                    {data.images.map((item: string, index: number) => (
                        <Pressable key={index} onPress={() => { setVisiableImages(true); handleSelectImages(index); }}>
                            <Image key={index} resizeMode="stretch" style={{ width: screenWidth * 4 / 5 }} className={`h-[200px] rounded-xl`} source={{ uri: item }} />
                        </Pressable>
                    ))}
                    <Modal
                        animationType="fade"
                        visible={visiableImages}
                        onRequestClose={() => setVisiableImages(false)}
                        transparent
                    >
                        <View style={{ backgroundColor: '#000000' }} className="w-full flex flex-1 justify-center items-center">
                            <View className="flex absolute top-3 left-3">
                                <Pressable onPress={() => setVisiableImages(false)}>
                                    {({ pressed }) => (
                                        <Animated.View style={{ backgroundColor: pressed ? '#374151' : 'transparent', borderRadius: 9999, padding: 4 }}>
                                            <FIcon name="arrow-left" size={24} color="#9ca3af" />
                                        </Animated.View>
                                    )}
                                </Pressable>
                            </View>
                            <View className="flex flex-row">
                                <FlatList
                                    ref={flatListRef}
                                    data={data.images}
                                    horizontal
                                    keyExtractor={(_, index) => index.toString()}
                                    pagingEnabled
                                    renderItem={({ item }) => (
                                        <Image key={item} resizeMode="stretch" style={{ width: screenWidth }} className={`h-[250px] rounded-xl`} source={{ uri: item }} />
                                    )}
                                    getItemLayout={(data, index) => ({
                                        length: screenWidth,
                                        offset: screenWidth * index,
                                        index,
                                    })}
                                    showsHorizontalScrollIndicator={false}
                                // ItemSeparatorComponent={() => <View className="w-4" />}
                                />
                            </View>
                        </View>
                    </Modal>
                </View>
            </ScrollView>
        </View>
    );
}
