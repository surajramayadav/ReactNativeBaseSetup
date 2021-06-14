import React, {useContext} from 'react';
import {
  Button,
  Text,
  Footer,
  FooterTab,
  Icon,
  Thumbnail,
  Badge,
  View,
} from 'native-base';
import Styles from './Styles/Styles';
import Colors from './Styles/Colors';
import IconBadge from 'react-native-icon-badge';
import {NavigationContext} from '@react-navigation/core';

const LFooter = (props) => {
  const navigation = useContext(NavigationContext);
  let {
    text = 'Submit',
    textColor = Colors.blue,
    bgColor = '#797979',
    btnStyle = {},
    textStyle = {},
  } = props;
  return (
    <Footer style={Styles.footer}>
      <FooterTab style={{backgroundColor: '#fff', width: '100%'}}>
        <IconBadge
          MainViewStyle={{width: '20%'}}
          MainElement={
            <Button
              vertical
              style={{...Styles.footerBtn}}
              onPress={() =>
                navigation.replace('Home', {screen: 'Dashboard'})
              }>
              <Icon
                name="desktop-mac-dashboard"
                type="MaterialCommunityIcons"
              />

              {/* <Text>Home</Text> */}
            </Button>
          }
          BadgeElement={
            <Text style={{color: '#FFFFFF', fontSize: 8, marginLeft: -1}}>
              5
            </Text>
          }
          IconBadgeStyle={{
            width: 20,
            height: 20,
            backgroundColor: 'rgba(255,0,0,0.8)',
            marginRight: 10,
          }}
          Hidden={false}
        />
        <IconBadge
          MainViewStyle={{width: '20%'}}
          MainElement={
            <Button
              vertical
              style={{...Styles.footerBtn}}
              onPress={() => navigation.navigate('Users', {screen: 'Calendar'})}>
              <Icon
                name="account-group-outline"
                type="MaterialCommunityIcons"
              />
              {/* <Text>Home</Text> */}
            </Button>
          }
          BadgeElement={
            <Text style={{color: '#FFFFFF', fontSize: 8, marginLeft: -1}}>
              5
            </Text>
          }
          IconBadgeStyle={{
            width: 20,
            height: 20,
            backgroundColor: 'rgba(255,0,0,0.8)',
            marginRight: 15,
          }}
          Hidden={false}
        />
        <Button
          vertical
          style={{...Styles.footerBtn}}
          onPress={() => navigation.navigate('Home', {screen: 'Status'})}>
          <Icon name="rupee" type="FontAwesome" />
          {/* <Text>Home</Text> */}
        </Button>
        <Button
          vertical
          style={{...Styles.footerBtn}}
          onPress={() => navigation.navigate('Domains', {screen: 'Tasks'})}>
          <Icon name="web" type="MaterialCommunityIcons" />
          {/* <Text>Home</Text> */}
        </Button>
        <Button
          vertical
          style={{...Styles.footerBtn}}
          onPress={() => navigation.navigate('Home', {screen: 'Chats'})}>
          <Icon name="search-outline" type="Ionicons" />
          {/* <Text>Home</Text> */}
        </Button>
        {/* <Button vertical onPress={() => navigation.replace('Login')}>
          <Thumbnail
            source={{uri: 'https://i.pravatar.cc/100'}}
            style={{width: 30, height: 30}}
          />
     <Text>Account</Text> 
        </Button> */}
      </FooterTab>
    </Footer>
  );
};

export default LFooter;
