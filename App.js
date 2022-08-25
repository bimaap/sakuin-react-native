
import React from 'react';
import Login from './src/screens/Login';
import CreatePin from './src/screens/CreatePin';
import PinSuccess from './src/screens/PinSuccess';
import ForgotPassword from './src/screens/ForgotPassword';
import ForgotPasswordConfirm from './src/screens/ForgotPasswordConfirm';
import Register from './src/screens/Register';
import RegisterProfile from './src/screens/RegisterProfile';
import RegisterSuccess from './src/screens/RegisterSuccess';
import Home from './src/screens/Home';
import History from './src/screens/History';
import FindReceiver from './src/screens/FindReceiver';
import Transfer from './src/screens/Transfer';
import TransferConfirm from './src/screens/TransferConfirm';
import TransferPin from './src/screens/TransferPin';
import TransferSuccess from './src/screens/TransferSuccess';
import TransferFailed from './src/screens/TransferFailed';
import Topup from './src/screens/Topup';
import TopupTransaction from './src/screens/TopupTransaction';
import Profile from './src/screens/Profile';
import PersonalInformation from './src/screens/PersonalInformation';
import PhoneManage from './src/screens/PhoneManage';
import PhoneAdd from './src/screens/PhoneAdd';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  const COLOR_PRIMARY = '#293462'
  const COLOR_SECONDARY = '#DBDFFD'
  const COLOR_MIDDLE = '#8289AF'

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
        <Stack.Screen options={{headerShown: false}} name="CreatePin" component={CreatePin} />
        <Stack.Screen options={{headerShown: false}} name="PinSuccess" component={PinSuccess} />
        <Stack.Screen options={{headerShown: false}} name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen options={{headerShown: false}} name="ForgotPasswordConfirm" component={ForgotPasswordConfirm} />

        <Stack.Screen options={{headerShown: false}} name="Register" component={Register} />
        <Stack.Screen options={{headerShown: false}} name="RegisterProfile" component={RegisterProfile} />
        <Stack.Screen options={{headerShown: false}} name="RegisterSuccess" component={RegisterSuccess} />

        <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
        <Stack.Screen options={{headerShown: false}} name="History" component={History} />
        <Stack.Screen options={{headerShown: false}} name="FindReceiver" component={FindReceiver} />
        <Stack.Screen options={{headerShown: false}} name="Transfer" component={Transfer} />
        <Stack.Screen options={{headerShown: false}} name="TransferConfirm" component={TransferConfirm} />
        <Stack.Screen options={{headerShown: false}} name="TransferPin" component={TransferPin} />
        <Stack.Screen options={{headerShown: false}} name="TransferSuccess" component={TransferSuccess} />
        <Stack.Screen options={{headerShown: false}} name="TransferFailed" component={TransferFailed} />

        <Stack.Screen options={{headerShown: false}} name="Topup" component={Topup} />
        <Stack.Screen options={{headerShown: false}} name="TopupTransaction" component={TopupTransaction} />

        <Stack.Screen options={{headerShown: false}} name="Profile" component={Profile} />
        <Stack.Screen options={{headerShown: false}} name="PersonalInformation" component={PersonalInformation} />
        <Stack.Screen options={{headerShown: false}} name="PhoneManage" component={PhoneManage} />
        <Stack.Screen options={{headerShown: false}} name="PhoneAdd" component={PhoneAdd} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}