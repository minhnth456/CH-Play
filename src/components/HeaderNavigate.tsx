import FIcon from 'react-native-vector-icons/Feather';
import EIcon from 'react-native-vector-icons/Entypo';
import { Animated, Pressable, Text, View } from 'react-native';


const HeaderNavigate = ({ className, title, navigation, moreAction }: { className?: string, title?: string, navigation: any, moreAction?: boolean }) => {
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
        <View className={`HEADER flex flex-row justify-between items-center ${className}`}>
            <Pressable
                onPress={() => hanldeNavigate()}
            >
                {({ pressed }) => (
                    <Animated.View style={getButtonStyle(pressed)}>
                        <FIcon name="arrow-left" size={24} color="#9ca3af" />
                    </Animated.View>
                )}
            </Pressable>
            <Text className="text-white grow text-[22px] pl-4">{title}</Text>
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
