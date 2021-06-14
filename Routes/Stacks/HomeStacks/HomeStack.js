import React from 'react'

import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../../Views/HomeScreens/Home';

const Stack = createStackNavigator();
export default function HomeStack() {
    return (
        // define here all Home tabs route here
        <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeScreen" component={Home} /> 
      </Stack.Navigator>
    )
}
