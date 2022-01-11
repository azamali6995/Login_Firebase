import React from 'react';
import {View} from 'react-native';
import Login from './src/component/Login/Login';
import Welcome from './src/component/Login/Welcome';
import SignUp from './src/component/Login/SignUp';
import ForgetPassword from './src/component/Login/ForgetPassword';
import CompanyDetail from './src/component/Login/CompanyDetail';
import UserShow from './src/component/Login/UserShow';
import LogOut from './src/component/Login/LogOut';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="CompanyDetail" component={CompanyDetail} />
        <Stack.Screen name="UserShow" component={UserShow} />
        <Stack.Screen name="LogOut" component={LogOut} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
