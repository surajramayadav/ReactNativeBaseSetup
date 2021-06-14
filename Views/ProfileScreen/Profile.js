import React from 'react'
import {
  Image,
  View,
  SafeAreaView,
  ImageBackground,
  Dimensions,
  Text,
  StyleSheet,
} from 'react-native';
import Header from '../../Components/Header';
import styles from '../../Components/Styles/Styles';

function Profile({navigation,route}) {

  return (
    <SafeAreaView style={styles.container}>
     <Header title="Home" navigation={navigation} noFab={true} route={route}>
    <View style={{flex:1,justifyContent:"center",alignItems:'center'}}>
      <Text>Profile Screen</Text>    
    </View>
    </Header>
  </SafeAreaView>
  );
}
export default Profile;
