
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from "react-redux";

import Login from './Login';
import CreateProfile from './CreateProfile';
import CreatePin from './CreatePin';
import PinSuccess from './PinSuccess';
import ForgotPassword from './ForgotPassword';
import ForgotPasswordConfirm from './ForgotPasswordConfirm';
import Register from './Register';
import RegisterSuccess from './RegisterSuccess';
import Home from './Home';
import History from './History';
import FindReceiver from './FindReceiver';
import Transfer from './Transfer';
import TransferConfirm from './TransferConfirm';
import TransferPin from './TransferPin';
import TransferSuccess from './TransferSuccess';
import TransferFailed from './TransferFailed';
import Topup from './Topup';
import TopupTransaction from './TopupTransaction';
import Profile from './Profile';
import PersonalInformation from './PersonalInformation';
import PhoneManage from './PhoneManage';
import PhoneAdd from './PhoneAdd';
import ChangePassword from './ChangePassword';
import ChangePin from './ChangePin';
import ChangePinConfirm from './ChangePinConfirm';
import Notification from './Notification';
import TopupSuccess from './TopupSuccess';
import EditProfile from './EditProfile';

const Stack = createNativeStackNavigator();

const Main = () => {
  const token = useSelector(state => state.auth.token);

  return (
    <NavigationContainer>
        {token ? (
          <Stack.Navigator>
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
            <Stack.Screen options={{headerShown: false}} name="TopupSuccess" component={TopupSuccess} />

            <Stack.Screen options={{headerShown: false}} name="Profile" component={Profile} />
            <Stack.Screen options={{headerShown: false}} name="PersonalInformation" component={PersonalInformation} />
            <Stack.Screen options={{headerShown: false}} name="PhoneManage" component={PhoneManage} />
            <Stack.Screen options={{headerShown: false}} name="PhoneAdd" component={PhoneAdd} />
            <Stack.Screen options={{headerShown: false}} name="ChangePassword" component={ChangePassword} />
            <Stack.Screen options={{headerShown: false}} name="ChangePin" component={ChangePin} />
            <Stack.Screen options={{headerShown: false}} name="ChangePinConfirm" component={ChangePinConfirm} />
            <Stack.Screen options={{headerShown: false}} name="Notification" component={Notification} />
            <Stack.Screen options={{headerShown: false}} name="EditProfile" component={EditProfile} />
            
            <Stack.Screen options={{headerShown: false}} name="CreateProfile" component={CreateProfile} />
            <Stack.Screen options={{headerShown: false}} name="CreatePin" component={CreatePin} />
            <Stack.Screen options={{headerShown: false}} name="PinSuccess" component={PinSuccess} />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator>
            <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
            <Stack.Screen options={{headerShown: false}} name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen options={{headerShown: false}} name="ForgotPasswordConfirm" component={ForgotPasswordConfirm} />
    
            <Stack.Screen options={{headerShown: false}} name="Register" component={Register} />
            <Stack.Screen options={{headerShown: false}} name="RegisterSuccess" component={RegisterSuccess} />
          </Stack.Navigator>
        )}
      
    </NavigationContainer>
  );
};

export default Main;