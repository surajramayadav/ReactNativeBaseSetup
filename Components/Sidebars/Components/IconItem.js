import {Icon, Button, ListItem, Left, Body, Right, Switch} from 'native-base';
import React from 'react';
import {View, Dimensions, Text, TouchableOpacity} from 'react-native';
import Styles from '../../Styles/Styles';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
function IconItem(props) {
  const {
    navigation,
    pendingTasks = 0,
    upcomingEvent = 0,
    tasksPendingToday = 0,
    friend,
    link = () => console.log('TEST'),
  } = props;
  let {
    title = 'Dashboard',
    icon = <Icon active name="home" type="AntDesign" />,
    right = null,
    // right = <Switch value={false} />,
  } = props;

  // console.log('friend', friend);
  return (
    <TouchableOpacity onPress={() => link()}>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{width: '15%'}}>{icon}</View>
        <View style={{width: '55%'}}>
          <Text>{title}</Text>
        </View>
        <View style={{width: '20%'}}>{right}</View>
      </View>
    </TouchableOpacity>
  );
}
export default IconItem;
