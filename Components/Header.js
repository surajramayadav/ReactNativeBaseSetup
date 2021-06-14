import React, { useEffect, useState } from 'react'
import { Appbar } from 'react-native-paper';
import { Platform } from 'react-native';
// import Icon from 'react-native-vector-icons/AntDesign';
import { View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo'
import {FloatingAction} from 'react-native-floating-action';
import styles from './Styles/Styles';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function Header({ title, navigation,route,noFab,children }) {
    const [fabActions, setfabActions] = useState('');
   
    let actions = [
        {
          //   text: 'New Chat',
          icon: <Icon style={{color: '#fff'}} name="add-to-list" type="Entypo" />,
          name: 'bt_new_domain',
          position: 2,
          color: '#D50000',
        },
    
        {
          //   text: 'New Chat',
          icon: <Icon style={{color: '#fff'}} name="add-user" type="Entypo" />,
          name: 'bt_new_user',
          position: 1,
          color: '#D50000',
        },
      ];
      let domainActions = [
        {
          //   text: 'New Chat',
          icon: <Icon style={{color: '#fff'}} name="add-to-list" type="Entypo" />,
          name: 'bt_new_domain',
          position: 1,
          color: '#D50000',
        },
      ];
      let userActions = [
        {
          //   text: 'New Chat',
          icon: <Icon style={{color: '#fff'}} name="add-user" type="Entypo" />,
          name: 'bt_new_user',
          position: 1,
          color: '#D50000',
        },
      ];

      useEffect(() => {
        console.log('props.route',route);
    
        // const params = route ? (route.params ? route.params : null) : null;
        if (route) {
          if (route.name == 'Home') {
            actions = domainActions;
            console.log('useEffect', actions);
            setfabActions(actions);
          }
          if (route.name == 'Profile') {
            actions = userActions;
            console.log('useEffect', actions);
            setfabActions(actions);
          }
        }
        // console.log('useEffect', actions);
        setfabActions(actions);
      }, []);
  
    return (
        <>
        {/* Header  */}
        <View style={{ height:50,justifyContent: 'space-between',flexDirection: 'row' }}>
            <Icon name="menu" color="black" size={30} style={{alignSelf: 'center',marginLeft:10}} onPress={()=>navigation.toggleDrawer()}/>
            <Text style={{alignSelf: 'center',fontSize:20}}>{title}</Text>
            <Icon name="dots-three-vertical" color="black" size={25} style={{alignSelf: 'center',marginRight: 10}}/>
        </View>
        <View style={{borderWidth:0.2}}/>



        {children}


        {/* Footer */}
        {noFab ? null : (
        <FloatingAction
         
          // shadow={{shadowOpacity: 1}}
          distanceToEdge={{vertical: 50, horizontal: 30}}
          actions={fabActions}
          // color="#fff"
          style={{marginBottom:50}}
          onPressItem={(name) => {
            console.log(`selected button: ${name}`);
            switch (name) {
              //GENERAL
              case 'bt_new_chat':
                // navigation.navigate('ChattrScreen');
                console.log("object")
                break;
              case 'bt_new_group':
                navigation.navigate('Home', {screen: 'Chats'});
                break;
              case 'bt_new_broadcast':
                navigation.navigate('Home', {screen: 'Calls'});
                break;
              case 'bt_new_task':
                navigation.navigate('Home', {screen: 'Tasks'});
                break;
              case 'bt_new_bookmark':
                navigation.navigate('Home', {screen: 'Status'});
                break;
              case 'bt_new_event':
                navigation.navigate('Home', {screen: 'Calendar'});
                break;
              //USERS
              case 'bt_new_user':
                navigation.navigate('UserForm', {edit: false});
                break;
              //DOMAINS
              case 'bt_new_domain':
                navigation.navigate('DomainForm', {edit: false});
                break;

              default:
                navigation.navigate('Home', {screen: 'Chats'});
                break;
            }
          }}
        />
      )}
        </>
    )
}
