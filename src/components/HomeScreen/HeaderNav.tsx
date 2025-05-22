import { useCallback, useRef } from 'react';
import { Animated, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { RefObject } from '../../interfaces/product';

export default function HeaderNav({ selectNav, setSelectNav }: { selectNav: string, setSelectNav: (title: string) => void }) {
    const scrollX = useRef(0);

    const choBanRef = useRef(null);
    const bangXepHangRef = useRef(null);
    const treEmRef = useRef(null);
    const coTinhPhiRef = useRef(null);
    const sachMoiRef = useRef(null);

    const Positon = useRef(new Animated.Value(0)).current;
    const widthAni = useRef(new Animated.Value(65)).current;

    const navrowAnimation = {
        width: widthAni,
        transform: [{ translateX: Positon }],
    };

    const changeBgColor = (pressed: any) => ({
        backgroundColor: pressed ? '#DDDDDD' : 'transparent',
    });

    const refMap = {
        'FOR_YOU': choBanRef,
        'BANG_XEP_HANG': bangXepHangRef,
        'TRE_EM': treEmRef,
        'CO_TINH_PHI': coTinhPhiRef,
        'OPTIONS': sachMoiRef,
    };

    const offsetMap = {
        'FOR_YOU': -5,
        'BANG_XEP_HANG': 0,
        'TRE_EM': 0,
        'CO_TINH_PHI': 0,
        'OPTIONS': 0,
    };

    const moveUnderLine = useCallback((ref: RefObject, offset = 0): void => {
        ref.current?.measure((fx, fy, width, height, px, _py) => {
            // console.log('width', width);
            const centerX = px + scrollX.current + offset;
            // console.log('centerX', centerX);

            Animated.timing(widthAni, {
                toValue: width - 18 - offset * 2,
                duration: 100,
                useNativeDriver: true,
            }).start();

            Animated.timing(Positon, {
                toValue: centerX,
                duration: 300,
                useNativeDriver: true,
            }).start();

        });
    }, [Positon, widthAni]);
    const handleSetNav = (title: string) => {
        if (selectNav !== title) {
            setSelectNav(title);
            moveUnderLine(refMap[title], offsetMap[title]);
        }
    };

    return (
        <View style={styles.viewContainer} className="Header2">
            <View style={styles.navContainer} className="NAV-Container">
                <ScrollView
                    // ref={scrollRef}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    onScroll={(e) => {
                        scrollX.current = e.nativeEvent.contentOffset.x;
                    }}
                    scrollEventThrottle={16}
                >
                    <Pressable ref={choBanRef} onPress={() => { handleSetNav('FOR_YOU'); }} >
                        {({ pressed }) => (
                            <View style={[styles.viewPx1, changeBgColor(pressed)]}>
                                <Text style={styles.textWhitePx1}>Cho bạn</Text>
                            </View>
                        )}
                    </Pressable>
                    <Pressable ref={bangXepHangRef} onPress={() => { handleSetNav('BANG_XEP_HANG'); }} >
                        {({ pressed }) => (
                            <View style={[changeBgColor(pressed), styles.viewPx2]}>
                                <Text style={styles.textWhitePx2}>Bảng xếp hạng</Text>
                            </View>
                        )}
                    </Pressable>
                    <Pressable ref={treEmRef} onPress={() => { handleSetNav('TRE_EM'); }}>
                        {({ pressed }) => (
                            <View style={[changeBgColor(pressed), styles.viewPx2]}>
                                <Text style={styles.textWhitePx2}>Trẻ em</Text>
                            </View>
                        )}
                    </Pressable>
                    <Pressable ref={coTinhPhiRef} onPress={() => { handleSetNav('CO_TINH_PHI'); }}>
                        {({ pressed }) => (
                            <View style={[changeBgColor(pressed), styles.viewPx2,]}>
                                <Text style={styles.textWhitePx2}>Có tính phí</Text>
                            </View>
                        )}
                    </Pressable>
                    <Pressable ref={sachMoiRef} onPress={() => { handleSetNav('OPTIONS'); }}>
                        {({ pressed }) => (
                            <View style={[changeBgColor(pressed), styles.viewPx2]}>
                                <Text style={styles.textWhitePx2}>Loại</Text>
                            </View>
                        )}
                    </Pressable>
                    <Animated.View style={[
                        styles.navrow,
                        navrowAnimation,
                    ]}
                    >
                        {/* <View className={`NAV-ROW absolute h-1 w-8 bottom-0 bg-red-500 rounded-tl-sm rounded-tr-sm`}></View> */}
                    </Animated.View>
                </ScrollView>

            </View>
            <View style={styles.navBottom} />
        </View>
    );
}

const styles = StyleSheet.create({
    navBottom: {
        height: 2,
        backgroundColor: '#6b7280',
    },
    viewPx1: {
        paddingHorizontal: 4,
        paddingTop: 8,
        paddingBottom: 16,
    },
    viewPx2: {
        paddingHorizontal: 8,
        paddingTop: 8,
        paddingBottom: 16,
    },
    navContainer: {
        paddingLeft: 8,
        position: 'relative',
    },
    viewContainer: {
        paddingTop: 16,
    },
    textWhitePx1: {
        color: '#fff',
        paddingHorizontal: 4,
    },
    textWhitePx2: {
        color: '#fff',
        paddingHorizontal: 8,
    },
    navrow: {
        position: 'absolute',
        height: 4,
        backgroundColor: '#FFFFFF',
        bottom: 0,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
})