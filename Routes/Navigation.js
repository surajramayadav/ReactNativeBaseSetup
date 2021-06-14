import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Drawers from './Drawers/Drawers';
import AuthStacks from './Stacks/AuthStacks/AuthStacks';
import { useSelector } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../Views/Auth/SplashScreen';
const Stack = createStackNavigator();
export default function Navigation() {
    const login = useSelector(state => state.login)
    const {isLogged}=login
    return (
        <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="SplashScreen">
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Auth" component={AuthStacks} />
        <Stack.Screen name="Home" component={Drawers} />
      </Stack.Navigator>
        </NavigationContainer>
    )
}
