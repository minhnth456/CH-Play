
import { Animated, Pressable, Text, View } from 'react-native';
import EIcon from 'react-native-vector-icons/Entypo';
import FIcon from 'react-native-vector-icons/Feather';


const TitleWithArrow = ({ title, className, style, icon, eIcon, adv }: { title: string, className?: string, style?: any, icon?: string, eIcon?: boolean, adv?: boolean }) => {
    const getViewStyle = (pressed: boolean) => ({
        backgroundColor: pressed ? '#374151' : 'transparent',
        ...style,
    });
    const getAnimatedViewStyle = (pressed: boolean) => ({
        width: 30,
        height: 30,
        backgroundColor: pressed ? '#374151' : 'transparent',
        borderRadius: 9999,
        justifyContent: 'center' as const,
        alignItems: 'center' as const,
    });

    return (
        <Pressable onPress={() => { }}>
            {({ pressed }) => (
                <View style={getViewStyle(pressed)} className={`flex flex-row justify-between items-center ${className}`}>
                    {adv ?
                        <View className="flex flex-row gap-x-3 justify-center items-center">
                            <Text className="text-white text-[10px]">Được tài trợ</Text>
                            <View className="w-2 h-2 bg-white rounded-full" />
                            <Text className="text-white text-[18px]">Được đề xuất cho bạn</Text>
                        </View>
                        :
                        <Text className="text-white text-[18px]">{title}</Text>
                    }
                    <Pressable onPress={() => console.log('Detail app press')}>
                        {({ pressed: innerPressed }) => (
                            <Animated.View style={getAnimatedViewStyle(innerPressed)}>
                                {eIcon
                                    ?
                                    <EIcon name={icon ? icon : 'dots-three-vertical'} size={24} color="#FFF" />
                                    :
                                    <FIcon name={icon ? icon : 'arrow-right'} size={24} color="#FFF" />
                                }
                            </Animated.View>
                        )}
                    </Pressable>
                </View>
            )}

        </Pressable>
    );
};

export default TitleWithArrow;
