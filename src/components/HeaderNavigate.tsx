import FIcon from 'react-native-vector-icons/Feather';
import EIcon from 'react-native-vector-icons/Entypo';
import { Animated, Pressable, StyleSheet, Text, View } from 'react-native';


const HeaderNavigate = ({ className, style, title, navigation, moreAction }: { className?: string, style?: any, title?: string, navigation: any, moreAction?: boolean }) => {
    const styles = StyleSheet.create({
        header: {
            ...style,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',

        },
        textWhite: {
            color: '#fff',
            flexGrow: 1,
            fontSize: 22,
            paddingLeft: 16,
        },
    });

    const getButtonStyle = (pressed: boolean) => ({
        width: 30,
        height: 30,
        backgroundColor: pressed ? '#374151' : 'transparent',
        display: 'flex' as 'flex',
        justifyContent: 'center' as const,
        alignItems: 'center' as const,
        borderRadius: 9999,
    });

    const hanldeNavigate = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.header} className={`HEADER ${className}`}>
            <Pressable
                onPress={() => hanldeNavigate()}
            >
                {({ pressed }) => (
                    <Animated.View style={getButtonStyle(pressed)}>
                        <FIcon name="arrow-left" size={24} color="#fff" />
                    </Animated.View>
                )}
            </Pressable>
            <Text style={styles.textWhite}>{title}</Text>
            {moreAction
                ?
                <Pressable>
                    {({ pressed }) => (
                        <Animated.View style={getButtonStyle(pressed)}>
                            <EIcon name="dots-three-vertical" size={18} color="#9ca3af" />
                        </Animated.View>
                    )}
                </Pressable>
                : ''
            }
        </View>
    );
};
export default HeaderNavigate;