import { useRef } from 'react';
import { Animated, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

interface RefObject {
    current: {
        measure: (
            callback: (
                fx: number,
                fy: number,
                width: number,
                height: number,
                px: number,
                py: number
            ) => void
        ) => void;
    } | null;
}

export default function HeaderNav({ setSelectNav }: { setSelectNav: (title: string) => void }) {
    const scrollX = useRef(0);

    const choBanRef = useRef(null);
    const bangXepHangRef = useRef(null);
    const treEmRef = useRef(null);
    const coTinhPhiRef = useRef(null);
    const sachMoiRef = useRef(null);

    const Positon = useRef(new Animated.Value(0)).current;
    const widthAni = useRef(new Animated.Value(65)).current;

    const moveUnderLine = (ref: RefObject, offset = 0): void => {
        ref.current?.measure((fx, fy, width, height, px, _py) => {
            console.log('width', width);
            const centerX = px + scrollX.current + offset;
            console.log('centerX', centerX);

            Animated.timing(Positon, {
                toValue: centerX,
                duration: 300,
                useNativeDriver: false,
            }).start();

            Animated.timing(widthAni, {
                toValue: width - 18 - offset * 2,
                duration: 300,
                useNativeDriver: false,
            }).start();
        });
    };

    const handleChangeSelectNav = (title: string) => {
        setSelectNav(title);
    }

    return (
        <View className="Header2 pt-4">
            <View className="NAV-Container pl-2 relative">
                <ScrollView
                    // ref={scrollRef}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    onScroll={(e) => {
                        scrollX.current = e.nativeEvent.contentOffset.x;
                    }}
                    scrollEventThrottle={16}
                >
                    <Pressable ref={choBanRef} onPress={() => { moveUnderLine(choBanRef, -5); handleChangeSelectNav('FOR_YOU'); }} >
                        {({ pressed }) => (
                            <View className="px-1 pt-2 pb-4" style={{ backgroundColor: pressed ? '#DDDDDD' : 'transparent' }}>
                                <Text className="text-white px-1">Cho bạn</Text>
                            </View>
                        )}
                    </Pressable>
                    <Pressable ref={bangXepHangRef} onPress={() => { moveUnderLine(bangXepHangRef); handleChangeSelectNav('BXH'); }} >
                        {({ pressed }) => (
                            <View className="px-2 pt-2 pb-4" style={{ backgroundColor: pressed ? '#DDDDDD' : 'transparent' }}>
                                <Text className="text-white px-2">Bảng xếp hạng</Text>
                            </View>
                        )}
                    </Pressable>
                    <Pressable ref={treEmRef} onPress={() => { moveUnderLine(treEmRef); handleChangeSelectNav('TRE_EM'); }}>
                        {({ pressed }) => (
                            <View className="px-2 pt-2 pb-4" style={{ backgroundColor: pressed ? '#DDDDDD' : 'transparent' }}>
                                <Text className="text-white px-2">Trẻ em</Text>
                            </View>
                        )}
                    </Pressable>
                    <Pressable ref={coTinhPhiRef} onPress={() => { moveUnderLine(coTinhPhiRef); handleChangeSelectNav('CTP'); }}>
                        {({ pressed }) => (
                            <View className="px-2 pt-2 pb-4" style={{ backgroundColor: pressed ? '#DDDDDD' : 'tranparent' }}>
                                <Text className="text-white px-2">Có tính phí</Text>
                            </View>
                        )}
                    </Pressable>
                    <Pressable ref={sachMoiRef} onPress={() => { moveUnderLine(sachMoiRef); handleChangeSelectNav('SACH_MOI'); }}>
                        {({ pressed }) => (
                            <View className="px-2 pt-2 pb-4" style={{ backgroundColor: pressed ? '#DDDDDD' : 'transparent' }}>
                                <Text className="text-white px-2">Sách mới</Text>
                            </View>
                        )}
                    </Pressable>
                    <Animated.View style={[
                        styles.navrow,
                        {
                            transform: [{ translateX: Positon }],
                            width: widthAni,
                        }]}
                    >
                        {/* <View className={`NAV-ROW absolute h-1 w-8 bottom-0 bg-red-500 rounded-tl-sm rounded-tr-sm`}></View> */}
                    </Animated.View>
                </ScrollView>

            </View>
            <View className="NAV-BOTTOM h-[2px] bg-gray-500" />
        </View>
    );
}

const styles = StyleSheet.create({
    navrow: {
        position: 'absolute',
        height: 4,
        backgroundColor: '#FFFFFF',
        bottom: 0,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
});
