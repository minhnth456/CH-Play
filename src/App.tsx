/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import '../global.css';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootNavigator from './navigations/RootNavigator';
import { ThemeProvider } from 'react-native-elements';
import { StatusBar } from 'react-native';
import Toast from 'react-native-toast-message';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle={'light-content'} backgroundColor={'transparent'} translucent />
      <ThemeProvider>
        {/* <AuthContextProvider> */}
        <Provider store={store}>
          <RootNavigator />
        </Provider>
        {/* </AuthContextProvider> */}
      </ThemeProvider>
      <Toast />
    </SafeAreaProvider >
  );
}

export default App;