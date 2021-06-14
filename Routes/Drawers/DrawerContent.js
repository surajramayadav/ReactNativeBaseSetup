
import React from 'react'
import { Text, View, } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Avatar } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Feather';
import { useDispatch } from 'react-redux';
import { setIsLogged } from '../../Redux/Slice/LoginSlice';
export default function DrawerContent({ navigation }) {
    const dispatch = useDispatch()
    return (
        <SafeAreaView style={{ flex: 1, }}>

            <ScrollView>
                <View style={{ flex: 1, backgroundColor: 'white', }}>
                    <View style={{ alignSelf: 'center', marginTop: 80 }}>
                    <Avatar.Image size={110} source={require('./../../assets/dp.jpg')} />
                     
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ alignSelf: 'center', fontSize: 20, fontWeight: 'bold' }}>Drawer Test</Text>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ alignSelf: 'center', fontSize: 12, fontWeight: 'bold' }}>DrawerTeste@gmail.com</Text>
                    </View>
                    <View style={{ marginTop: 10 ,borderWidth:0.5}}>
                        
                        </View>
                    <View style={{ marginTop: 15 }}>
                        <TouchableOpacity >
                            <Icon style={{ paddingLeft: 10 }} name="home" size={20} color='black' />
                            <Text style={{ position: 'absolute', paddingLeft: 40, fontSize: 15, }}>Home</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 15 }}>
                        <TouchableOpacity>
                            <Icon style={{ paddingLeft: 10 }} name="search" size={20} color='black' />
                            <Text style={{ position: 'absolute', paddingLeft: 40, fontSize: 15, }}>Search Orginzer</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 15 }}>
                        <TouchableOpacity >
                            <Icon style={{ paddingLeft: 10 }} name="activity" size={20} color='black' />
                            <Text style={{ position: 'absolute', paddingLeft: 40, fontSize: 15 }}>My Activity</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginTop: 15 }}>
                        <TouchableOpacity >
                            <Icon style={{ paddingLeft: 10 }} name="info" size={20} color='black' />
                            <Text style={{ position: 'absolute', paddingLeft: 40, fontSize: 15 }}>About Us</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 15 }}>
                        <TouchableOpacity >
                            <Icon style={{ paddingLeft: 10 }} name="message-circle" size={20} color='black' />
                            <Text style={{ position: 'absolute', paddingLeft: 40, fontSize: 15 }}>Feedback</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 15 }}>
                        <TouchableOpacity >
                            <Icon style={{ paddingLeft: 10 }} name="phone" size={20} color='black' />
                            <Text style={{ position: 'absolute', paddingLeft: 40, fontSize: 15 }}>Contact Us</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 10 ,borderWidth:0.5}}>
                        
                    </View>

                    <View style={{ marginTop: 15 }}>
                        <TouchableOpacity onPress={()=>{dispatch(setIsLogged(false)), navigation.replace('Auth')}}>
                            <Icon style={{ paddingLeft: 10 }} name="log-out" size={20} color='black' />
                            <Text style={{ position: 'absolute', paddingLeft: 40, fontSize: 15, }}>Logout</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>

        </SafeAreaView>
    )
}
