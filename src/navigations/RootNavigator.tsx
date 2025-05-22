import { NavigationContainer } from '@react-navigation/native';
import UserNavigator from './UserNavigator';
import AuthNavigator from './AuthNavigator';
import { useAuth } from '../Contexts/AuthContext';

export default function RootNavigator() {
    const { user } = useAuth();
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
