import { useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Animated, Dimensions, Image, Keyboard, KeyboardAvoidingView, Platform, Pressable, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PressItems from '../components/PressItems';
import { signIn } from '../reducers/authSlice';
import { useAppDispatch } from '../store/store';
import { useSelector } from 'react-redux';

const screenWidth = Dimensions.get('window').width;

export default function SignInScreen({ navigation }: { navigation: any }) {
    const dispatch = useAppDispatch();
    const error = useSelector((state: any) => state.auth.error);
    const { control, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (value: any) => {
        // console.log(value);
        Keyboard.dismiss();
        dispatch(signIn(value));
    };

    const emailLine = useRef(new Animated.Value(0)).current;
    const passwordLine = useRef(new Animated.Value(0)).current;

    const hanleFocus = (inputLine: any) => {
        Animated.timing(inputLine, {
            toValue: screenWidth * 2 / 3,
            duration: 500,
            useNativeDriver: false,
        }).start();
    };

    const hanleUnFocus = (inputLine: any) => {
        Animated.timing(inputLine, {
            toValue: 0,
            duration: 500,
            useNativeDriver: false,
        }).start();
    };

    if (error) {
        console.log(error);
        // return (
        //     <Text>...Lỗi</Text>
        // )
    }

    return (
        <View className="flex flex-1 justify-center items-center bg-white">
            <SafeAreaView>
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                    <View style={{ width: screenWidth }} className="flex justify-center items-center">
                        <View className="flex gap-y-4 items-center py-12">
                            <Image className="w-12 h-12" source={require('../assets/ch-play.png')} />
                            <Text className="text-blue-500 font-extrabold text-3xl">Welcome back.</Text>
                        </View>

                        <View style={{ width: screenWidth * 2 / 3 }} className="flex gap-y-8">
                            <View className="py-1">
                                <Controller
                                    control={control}
                                    name="email"
                                    rules={{
                                        required: 'Bắt buộc!',
                                        pattern: {
                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                            message: 'Không đúng định dạng!',
                                        },
                                    }}
                                    render={({ field: { onChange, value } }) => (
                                        <TextInput
                                            onFocus={() => hanleFocus(emailLine)}
                                            onBlur={() => hanleUnFocus(emailLine)}
                                            onChangeText={onChange} value={value}
                                            keyboardType="email-address"
                                            autoCapitalize="none"
                                            placeholder="Email"
                                        />
                                    )}
                                />
                                <View className="flex relative">
                                    <View className="w-full h-[3px] bg-slate-500 rounded-full" />
                                    <Animated.View
                                        style={{ width: emailLine }}
                                        className="h-[3px] bg-blue-500 absolute rounded-full" />
                                    {errors.email && (
                                        <>
                                            <Text className="text-red-500 font-bold">{String(errors.email.message)}</Text>
                                            <View className="w-full h-[3px] bg-red-500 absolute z-20 rounded-full" />
                                        </>
                                    )}
                                </View>
                            </View>

                            <View className="py-1">
                                <Controller
                                    control={control}
                                    name="password"
                                    rules={{
                                        required: 'Bắt buộc!',
                                        minLength: {
                                            value: 3,
                                            message: 'Ít nhất 3 ký tự!',
                                        },
                                    }}
                                    render={({ field: { onChange, value } }) => (
                                        <TextInput onFocus={() => hanleFocus(passwordLine)}
                                            onBlur={() => hanleUnFocus(passwordLine)}
                                            onChangeText={onChange} value={value}
                                            secureTextEntry
                                            placeholder="Password"
                                        />
                                    )}
                                />
                                <View className="flex relative">
                                    <View className="w-full h-[3px] bg-slate-500 rounded-full" />
                                    <Animated.View
                                        style={{ width: passwordLine }}
                                        className="w-1/2 h-[3px] bg-blue-500 z-10 absolute rounded-full"
                                    />
                                    {errors.password && (<>
                                        <Text className="text-red-500 font-bold">{String(errors.password.message)}</Text>
                                        <View className="w-full h-[3px] bg-red-500 absolute z-20 rounded-full" />
                                    </>)}
                                </View>

                                <View className="flex w-full items-end mt-2">
                                    <Text className="text-[12px]">Forgot your password ?</Text>
                                </View>
                            </View>

                            <View className="flex gap-y-2">
                                <Pressable onPress={handleSubmit(onSubmit)}>
                                    <Text className="text-white text-center py-2 rounded-md bg-blue-500 text-lg font-semibold tracking-widest">LOGIN</Text>
                                </Pressable>
                                <View className="flex flex-row gap-x-1 justify-center">
                                    <Text className="text-black font-medium">Don"t have an account?</Text>
                                    <PressItems navigation={navigation} navigationTo="SignUp">
                                        <Text className="text-blue-500 font-bold">Sign up</Text>
                                    </PressItems>
                                </View>
                            </View>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </View>
    );
}
