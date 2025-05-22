import { NavigationContainer } from '@react-navigation/native';
import UserNavigator from './UserNavigator';
import AuthNavigator from './AuthNavigator';
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAppDispatch } from '../store/store';
import { setDataUser } from '../reducers/authSlice';

export default function RootNavigator() {
    //Thoát app rồi thì lấy cái này ở đâu ????
    const user = useSelector((state: any) => state.auth.user);
    console.log('user Root Navi: ', user);
    const dispatch = useAppDispatch();
    if (!user) {
        (async () => {
            const data = await AsyncStorage.getItem('userData');
            // console.log('userData:', data);
            if (data) {
                // console.log('có data và bắt đầu set');
                dispatch(setDataUser(JSON.parse(data)));
            }
        })();
    }
    return (
        <NavigationContainer>
            {user
                ?
                <UserNavigator />
                :
                <AuthNavigator />
            }
        </NavigationContainer>
    );
}
