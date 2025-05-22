import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import Notification from '../screens/Notification';

const Stack = createNativeStackNavigator();

export default function UserNavigator() {
    return (
        <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Detail" component={DetailScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Notifi" component={Notification} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}
