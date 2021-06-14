import React from 'react';
import {
  Image,
  View,
  SafeAreaView,
  ImageBackground,
  Dimensions,
  Text,
  StyleSheet,
} from 'react-native';
export default function Register() {
  return (
    <SafeAreaView style={styles.container}>
    <View style={{flex:1, justifyContent: "center", alignItems: 'center' }}>
     <Text>Register Screen</Text>
   </View>
 </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 25,
    padding: 15,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  contentCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: 'white',
    padding: 10,
  },
});
