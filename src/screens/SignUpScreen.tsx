import { useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Animated, Dimensions, Image, Keyboard, KeyboardAvoidingView, Platform, Pressable, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PressItems from '../components/PressItems';
import { useAppDispatch } from '../store/store';
import { signUp } from '../reducers/authSlice';

const screenWidth = Dimensions.get('window').width;

export default function SignUpScreen({ navigation }: { navigation: any }) {
    const { control, handleSubmit, getValues, formState: { errors } } = useForm();

    const emailLine = useRef(new Animated.Value(0)).current;
    const passwordLine = useRef(new Animated.Value(0)).current;
    const confirmPasswordLine = useRef(new Animated.Value(0)).current;

    const dispatch = useAppDispatch();

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

    const onSubmit = async (value: any) => {
        Keyboard.dismiss();
        console.log(value);
        dispatch(signUp({ ...value, cartId: null, avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS-_lB_YIKaaPz_vciNdT2ebnlUl6gJE5kBQ&s' }));
    };

    return (
        <View className="flex flex-1 justify-center items-center bg-white">
            <SafeAreaView>
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                    <View style={{ width: screenWidth }} className="flex justify-center items-center">
                        <View className="flex gap-y-4 items-center py-12">
                            <Image className="w-12 h-12" source={require('../assets/ch-play.png')} />
                            <Text className="text-blue-500 font-extrabold text-3xl">Hello new friend.</Text>
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
                                            placeholder="Email" />
                                    )}
                                />
                                <View className="flex relative">
                                    <View className="w-full h-[3px] bg-slate-500 rounded-full" />
                                    <Animated.View
                                        style={{ width: emailLine }}
                                        className="h-[3px] bg-blue-500 absolute rounded-full"
                                    />
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
                                        <TextInput
                                            onFocus={() => hanleFocus(passwordLine)}
                                            onBlur={() => hanleUnFocus(passwordLine)}
                                            onChangeText={onChange} value={value}
                                            secureTextEntry
                                            placeholder="Password" />
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
                            </View>

                            <View className="py-1">
                                <Controller
                                    control={control}
                                    name="confirmPassword"
                                    rules={{
                                        required: 'Vui lòng xác nhận mật khẩu!',
                                        validate: (value) => value === getValues('password') || 'Không trùng khớp',
                                    }}
                                    render={({ field: { onChange, value } }) => (
                                        <TextInput
                                            onFocus={() => hanleFocus(confirmPasswordLine)}
                                            onBlur={() => hanleUnFocus(confirmPasswordLine)}
                                            onChangeText={onChange} value={value}
                                            secureTextEntry
                                            placeholder="Confirm password"
                                        />
                                    )}
                                />
                                <View className="flex relative">
                                    <View className="w-full h-[3px] bg-slate-500 rounded-full" />
                                    <Animated.View
                                        style={{ width: confirmPasswordLine }}
                                        className="w-1/2 h-[3px] bg-blue-500 z-10 absolute rounded-full"
                                    />
                                    {errors.confirmPassword && (<>
                                        <Text className="text-red-500 font-bold">{String(errors.confirmPassword.message)}</Text>
                                        <View className="w-full h-[3px] bg-red-500 absolute z-20 rounded-full" />
                                    </>)}
                                </View>
                            </View>

                            <View className="flex gap-y-2 mt-4">
                                <Pressable onPress={handleSubmit(onSubmit)}>
                                    <Text className="text-white text-center py-2 rounded-md bg-blue-500 text-lg font-semibold tracking-widest">CREATE</Text>
                                </Pressable>
                                <View className="flex flex-row gap-x-1 justify-center">
                                    <Text className="text-black font-medium">Have an account?</Text>
                                    <PressItems navigation={navigation} navigationTo="SignIn">
                                        <Text className="text-blue-500 font-bold">Sign in</Text>
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
