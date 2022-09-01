
import React from 'react';
import Login from './src/screens/Login';
import CreateProfile from './src/screens/CreateProfile';
import CreatePin from './src/screens/CreatePin';
import PinSuccess from './src/screens/PinSuccess';
import ForgotPassword from './src/screens/ForgotPassword';
import ForgotPasswordConfirm from './src/screens/ForgotPasswordConfirm';
import Register from './src/screens/Register';
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
import ChangePassword from './src/screens/ChangePassword';
import ChangePin from './src/screens/ChangePin';
import ChangePinConfirm from './src/screens/ChangePinConfirm';
import Notification from './src/screens/Notification';
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
      {/* <PersistGate persistor={persistor}> */}
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
            <Stack.Screen options={{headerShown: false}} name="CreateProfile" component={CreateProfile} />
            <Stack.Screen options={{headerShown: false}} name="CreatePin" component={CreatePin} />
            <Stack.Screen options={{headerShown: false}} name="PinSuccess" component={PinSuccess} />
            <Stack.Screen options={{headerShown: false}} name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen options={{headerShown: false}} name="ForgotPasswordConfirm" component={ForgotPasswordConfirm} />

            <Stack.Screen options={{headerShown: false}} name="Register" component={Register} />
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
            <Stack.Screen options={{headerShown: false}} name="ChangePassword" component={ChangePassword} />
            <Stack.Screen options={{headerShown: false}} name="ChangePin" component={ChangePin} />
            <Stack.Screen options={{headerShown: false}} name="ChangePinConfirm" component={ChangePinConfirm} />
            <Stack.Screen options={{headerShown: false}} name="Notification" component={Notification} />
          </Stack.Navigator>
        </NavigationContainer>
      {/* </PersistGate> */}
    </Provider>
  );
}