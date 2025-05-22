import React, { useRef } from 'react';
import { Animated, Pressable } from 'react-native';
import { IData } from '../interfaces/product';

type Props = { children: React.JSX.Element, className?: string, onScale?: boolean, navigation?: any, navigationTo?: string, itemNavigation?: IData, style?: any, action?: any }

const PressItems = ({ children, className, onScale, navigation, navigationTo, itemNavigation, style, action }: Props) => {
    const scaleAnimation = useRef(new Animated.Value(1)).current;
    const getViewStyle = (pressed: boolean) => ({
        backgroundColor: pressed ? '#374151' : 'transparent',
        transform: [{ scale: scaleAnimation }],
        ...style,
    });

    const handlePressIn = () => {
        Animated.timing(scaleAnimation, {
            toValue: 0.95,
            duration: 200,
            useNativeDriver: false,
        }).start();
    };

    const handlePressOut = () => {
        Animated.timing(scaleAnimation, {
            toValue: 1,
            duration: 200,
            useNativeDriver: false,
        }).start();
    };

    const hanldeNavigate = () => {
        if (itemNavigation) {
            navigation.navigate(navigationTo, itemNavigation);
        } else {
            navigation.navigate(navigationTo);
        }
    };
    return (
        <Pressable
            onPress={
                navigationTo ? hanldeNavigate : action
            }
            onPressIn={() => { if (onScale) { handlePressIn(); } }}
            onPressOut={() => { if (onScale) { handlePressOut(); } }}
        >
            {({ pressed }) => (
                <Animated.View style={getViewStyle(pressed)} className={`${className}`}>
                    {children}
                </Animated.View>
            )}
        </Pressable >
    );
};

export default PressItems;