
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';

import Login from './Login';
import Home from './Home';

const Stack = createNativeStackNavigator();

const Main = () => {
  const token = useSelector(state => state.auth.token);
  console.log(111);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {token ? (
            <>
                <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
            </>
        ) : (
            <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;