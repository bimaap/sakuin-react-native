
import React from 'react';
import Main from './src/screens/Main';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from "./src/redux/store";

const Stack = createNativeStackNavigator();

export default function App() {
  const COLOR_PRIMARY = '#293462'
  const COLOR_SECONDARY = '#DBDFFD'
  const COLOR_MIDDLE = '#8289AF'

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Main />
      </PersistGate>
    </Provider>
  );
}