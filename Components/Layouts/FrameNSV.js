import {Button, Card, Icon, Form, Item, Thumbnail} from 'native-base';
import React, {useContext} from 'react';
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
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
// export const RouterContext = React.createContext();
function Frame(props) {
  // const {navigation, navs = props.navigation} = props;
  const navigation = useContext(NavigationContext);

  const actions = [
    {
      //   text: 'New Chat',
      icon: (
        <Icon
          style={{color: '#fff'}}
          name="md-chatbubble-ellipses-outline"
          type="Ionicons"
        />
      ),
      name: 'bt_new_chat',
      position: 7,
      color: '#D50000',
    },
    {
      //   text: 'New Group',
      icon: (
        <Icon
          style={{color: '#fff'}}
          name="md-chatbubbles-outline"
          type="Ionicons"
        />
      ),
      name: 'bt_new_group',
      position: 6,
      color: '#AA00FF',
    },
    {
      //   text: 'Location',
      icon: (
        <Icon style={{color: '#fff'}} name="bullhorn" type="FontAwesome5" />
      ),
      name: 'bt_new_broadcast',
      position: 5,
      color: '#00695C',
    },
    {
      //   text: 'Video3',
      icon: <Icon style={{color: '#fff'}} name="tasks" type="FontAwesome5" />,
      name: 'bt_new_task',
      position: 4,
      color: '#FFD600',
    },
    {
      //   text: 'Video2',
      icon: (
        <Icon
          style={{color: '#fff'}}
          name="bookmark-plus-outline"
          type="MaterialCommunityIcons"
        />
      ),
      name: 'bt_new_bookmark',
      position: 3,
      color: '#26C6DA',
    },
    // {
    //   //   text: 'Video',
    //   icon: (
    //     <Icon style={{color: '#fff'}} name="note-add" type="MaterialIcons" />
    //   ),
    //   name: 'bt_new_bookmark',
    //   position: 3,
    //   color: '#AEEA00',
    // },
    {
      //   text: 'Video1',
      icon: (
        <Icon
          style={{color: '#fff'}}
          name="calendar-plus-o"
          type="FontAwesome"
        />
      ),
      name: 'bt_new_event',
      position: 2,
      color: '#F57F17',
    },
    // {
    //   //   text: 'Video2',
    //   icon: (
    //     <Icon
    //       style={{color: '#fff'}}
    //       name="bookmark-plus-outline"
    //       type="MaterialCommunityIcons"
    //     />
    //   ),
    //   name: 'bt_new_2',
    //   position: 1,
    //   color: '#26C6DA',
    // },
  ];
  // console.log('Frame Screen', props);

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          height: 50,
          width: '100%',
          backgroundColor: Colors.blue,
        }}>
        <View
          style={{
            flex: 1,
            height: 50,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            marginLeft: 4,
            marginRight: 12,
            paddingTop: 4,
          }}>
          <View style={{marginTop: 5, marginRight: 5}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Home', {screen: 'Chats'})}>
              <Icon name="arrowleft" type="AntDesign" />
            </TouchableOpacity>
          </View>
          <View style={{}}>
            <Thumbnail
              source={{uri: 'https://i.pravatar.cc/100'}}
              style={{width: 40, height: 40}}
            />
          </View>
          <View style={{marginTop: 7, marginRight: 5, marginLeft: 10}}>
            <Text style={{fontSize: 18}}>Chattr Team</Text>
          </View>
        </View>
      </View>
      {/* END OF COLOURED HEADER */}
      {props.children}
      {/* <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            backgroundColor: '#fff',
            paddingBottom: 20,
          }}>
          <View
            style={{
              width: '100%',
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            
          </View>
        </View> */}
      <Footer />
    </SafeAreaView>
  );
}

export default Frame;
