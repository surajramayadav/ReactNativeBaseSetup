import React from 'react'
import {
  Image,
  View,
  SafeAreaView,
  ImageBackground,
  Dimensions,
  Text,
  StyleSheet,
  FlatList
} from 'react-native';
import { Avatar } from 'react-native-paper';
import Header from '../../Components/Header';
import styles from '../../Components/Styles/Styles';
import Icon from 'react-native-vector-icons/AntDesign'

const data = [
  {
    "name": "Alex",
    "address": "Mumbai Maharashtra",
    "id": 1
  },
  {
    "name": "Abc Alex",
    "address": "Thane Maharashtra",
    "id": 2
  },
  {
    "name": "Alex",
    "address": "Mumbai Maharashtra",
    "id": 3
  },
  {
    "name": "Abc Alex",
    "address": "Thane Maharashtra",
    "id": 4
  },
  {
    "name": "Alex",
    "address": "Mumbai Maharashtra",
    "id": 5
  },
  {
    "name": "Abc Alex",
    "address": "Mumbai Maharashtra",
    "id": 6
  },
  {
    "name": "Alex",
    "address": "Thane Maharashtra",
    "id": 7
  },
  {
    "name": "Alex",
    "address": "Mumbai Maharashtra",
    "id": 8
  },
  {
    "name": "Alex",
    "address": "Thane Maharashtra",
    "id": 9
  }
]

function Home({ navigation, route }) {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Home" navigation={navigation} noFab={false} route={route}>
        <FlatList
          data={data}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) =>
            <>
              <View style={{ flexDirection: 'row', margin: 15,justifyContent:'space-between' }}>
                <View style={{ flexDirection: 'row',}}>
                <Avatar.Image size={50} source={require('../../assets/dp.jpg')} />
                <View style={{ marginTop: 5, marginLeft: 15 }}>
                  <Text style={{ fontSize: 18 }}>{item.name}</Text>
                  <Text>{item.address}</Text>
                </View>
                </View>
                
                <View style={{alignContent:'flex-end',flexDirection:'row'}}>
                  <Icon style={{marginTop:10,marginRight:10}} onPress={()=>alert(item.name)} name="infocirlceo" size={25}/>
                </View>
              </View>
              <View style={{borderWidth:0.2}}/>
            </>
          }

        />
      </Header>
    </SafeAreaView>
  );
}
export default Home;
