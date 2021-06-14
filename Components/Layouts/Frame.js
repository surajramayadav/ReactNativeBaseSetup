import {Button, Card, Icon, Form, Item, Thumbnail} from 'native-base';
import React, {useContext, useState, useEffect} from 'react';
import {
  Image,
  View,
  SafeAreaView,
  ImageBackground,
  Dimensions,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import styles from '../Styles/Styles';
import {ScrollView} from 'react-native-gesture-handler';
import Colors from '../Styles/Colors';
import Footer from '../Footer';
import {FloatingAction} from 'react-native-floating-action';
import {NavigationContext} from '@react-navigation/core';
import SocketContext from '../../SocketContext';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
// export const RouterContext = React.createContext();
// import {loginUser} from '../../Redux/Slice/LoginSlice';
// import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
function Frame(props) {
  // const {navigation, navs = props.navigation} = props;
  const navigation = useContext(NavigationContext);
  const socket = useContext(SocketContext);
  const loginData = useSelector((state) => state.login);
  const [fabActions, setfabActions] = useState('');
  const {noFab = false, noNav = false} = props;
  // const socket = useSelector((state) => state.socket);
  const {user = null} = loginData;
  let username = '';

  if (user) {
    username = user.name;
  }
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
  console.log('FrameScreen', props.route);
  useEffect(() => {
    console.log('props.route', props.route);
    const route = props.route;
    const params = route ? (route.params ? route.params : null) : null;
    if (route) {
      if (route.name == 'Domains') {
        actions = domainActions;
        console.log('useEffect', actions);
        setfabActions(actions);
      }
      if (route.name == 'Users') {
        actions = userActions;
        console.log('useEffect', actions);
        setfabActions(actions);
      }
    }
    console.log('useEffect', actions);
    setfabActions(actions);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {noNav ? null : (
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              backgroundColor: Colors.blue,
            }}>
            <View
              style={{
                height: 50,
                width: '100%',
              }}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginLeft: 12,
                  marginRight: 12,
                }}>
                <View style={{marginTop: 4}}>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <View>
                      <TouchableOpacity
                        onPress={() => {
                          navigation.openDrawer();
                        }}>
                        <Thumbnail
                          source={{uri: 'https://i.pravatar.cc/100'}}
                          style={{width: 40, height: 40}}
                        />
                      </TouchableOpacity>
                    </View>
                    <View style={{marginLeft: 10, marginTop: -10}}>
                      <Text style={{fontSize: 24}}>{username}</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        )}
        {/* END OF COLOURED HEADER */}
        {/* START OF MAIN BODY */}
        {props.children}
        {/* END OF MAIN BODY */}
      </ScrollView>
      {/* START OF FAB */}
      <Footer />
      {noFab ? null : (
        <FloatingAction
          // shadow={{shadowOpacity: 1}}
          distanceToEdge={{vertical: 50, horizontal: 30}}
          actions={fabActions}
          // color="#fff"
          onPressItem={(name) => {
            console.log(`selected button: ${name}`);
            switch (name) {
              //GENERAL
              case 'bt_new_chat':
                navigation.navigate('ChattrScreen');
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
      {/* END OF FAB */}
    </SafeAreaView>
  );
}

export default Frame;
