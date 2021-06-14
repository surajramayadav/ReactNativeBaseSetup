import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../../../Views/Auth/SplashScreen';
import Login from '../../../Views/Auth/Login';
import Register from '../../../Views/Auth/Register';

const Stack = createStackNavigator();
export default function AuthStacks() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    )
}
