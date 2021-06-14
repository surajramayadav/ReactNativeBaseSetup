import React from 'react'
import { createDrawerNavigator, } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabs from '../BottomTabs/BottomTabs';
import DrawerContent from './DrawerContent';

const Drawer = createDrawerNavigator();
export default function Drawers(props) {
    return (
        
        <Drawer.Navigator initialRouteName="UserActivity" openByDefault={false}
          drawerContent={props=> <DrawerContent {...props}/>} drawerStyle={{
            backgroundColor: 'white',
            width: 220,}}>
            <Drawer.Screen name="UserActivity" component={BottomTabs} />
          </Drawer.Navigator>
        
    )
}
