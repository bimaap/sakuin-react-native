
import React from 'react';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import RegisterProfile from './src/screens/RegisterProfile';
import CreatePin from './src/screens/CreatePin';
import PinSuccess from './src/screens/PinSuccess';
import ForgotPassword from './src/screens/ForgotPassword';
import ForgotPasswordConfirm from './src/screens/ForgotPasswordConfirm';
import Home from './src/screens/Home';
import History from './src/screens/History';

// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const Stack = createNativeStackNavigator();

export default function App() {
  const COLOR_PRIMARY = '#293462'
  const COLOR_SECONDARY = '#DBDFFD'
  const COLOR_MIDDLE = '#8289AF'

  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Login" component={Login} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <History />
  );
}