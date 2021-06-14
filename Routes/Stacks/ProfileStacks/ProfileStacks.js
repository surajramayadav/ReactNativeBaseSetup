import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import Profile from '../../../Views/ProfileScreen/Profile';
const Stack = createStackNavigator();
export default function ProfileStacks() {
    return (
             // define here all Home tabs route here
             <Stack.Navigator initialRouteName="ProfileScreen" screenOptions={{headerShown: false}}>
             <Stack.Screen name="ProfileScreen" component={Profile} /> 
           </Stack.Navigator>
    )
}
