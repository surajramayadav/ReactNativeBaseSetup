import {Icon, Button, ListItem, Left, Body, Right, Switch} from 'native-base';
import React, {useContext} from 'react';
import {View, Dimensions, Text} from 'react-native';
import { NavigationContext } from '@react-navigation/native';

import Styles from '../Styles/Styles';
import IconItem from './Components/IconItem';
import Colors from '../Styles/Colors';

const dataArray = [
  {title: 'First Element', content: 'Lorem ipsum dolor sit amet'},
  {title: 'Second Element', content: 'Lorem ipsum dolor sit amet'},
  {title: 'Third Element', content: 'Lorem ipsum dolor sit amet'},
];
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
function MainSideBar(props) {
  // const navigation = useContext(NavigationContext);
  const {
    navigation,
    pendingTasks = 0,
    upcomingEvent = 0,
    tasksPendingToday = 0,
    friend,
  } = props;
  logout = () => {
    navigation.push('Login', {logout: true});
  };
  // console.log('friend', friend);
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        //
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}>
      <View
        style={{
          width: '100%',
          height: 200,
          background: 1,
          backgroundColor: Colors.cadetBlue,
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View>
            <Text
              style={{
                color: Colors.white,
                fontSize: 34,
                width: '100%',
                textAlign: 'center',
              }}>
              Welcome
            </Text>
          </View>
        </View>
      </View>
      <View style={{width: '100%', padding: 20}}>
        <View style={{marginTop: 10}}>
          <IconItem
            link={() => {
              navigation.navigate('Home');
            }}
            title="Home"
          />
        </View>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        <View style={{width: '100%', padding: 20}}>
          <Button full bordered style={{width: '100%'}} onPress={logout}>
            <Text style={{width: '100%', textAlign: 'center'}}>Logout</Text>
          </Button>
        </View>
      </View>
    </View>
  );
}
export default MainSideBar;
