import React from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ScrollView,


} from 'react-native';
import {Button} from 'react-native-paper';
import { useDispatch } from 'react-redux';
import InputForm from '../../Components/Form/InputForm';
import { setIsLogged } from '../../Redux/Slice/LoginSlice';



const loginData = {
  formData: [
    {
      labelValue: 'Email',
      control: 'input',
      autoCapitalize: 'none',
      autoCorrect: false,
      label: 'Email',
      name: 'email',
      formikKey: 'username',
      placeholder: 'example@gmail.com',
      autoFocus: true,
    },
    {
      labelValue: 'Password',
      control: 'input',
      autoCapitalize: 'none',
      autoCorrect: false,
      secureTextEntry: true,
      name: 'password',
      formikKey: 'password',
      placeholder: 'Enter Password',
    },
  ],
  apiCall: 'login',
  title: 'Login',
  // button: () => {
  //   return (
  //     <Button
  //     // icon="camera"
  //     style={{marginTop: 10}}
  //     // loading={loading}
  //     mode="contained"
      
  //     >
  //     gygygy
  //   </Button>
  //   )
  // }
};


export default function Login({navigation}) {

  const dispatch = useDispatch()
  const submitHandler=(values)=>{
    console.log(values)
     dispatch(setIsLogged(true));
     navigation.replace('Home')
  }
  return (
    <SafeAreaView style={{marginTop: 20}}>
    <KeyboardAvoidingView behaviour="padding" keyboardVerticalOffset={100} >
      <ScrollView keyboardShouldPersistTaps='always'>
        <View style={{padding: 20}}>
          <Text style={styles.text}>Login</Text>
          <InputForm inputData={loginData} onSubmit={submitHandler} />
        </View>
        <View style={styles.container}>
          <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
            <Text style={styles.navButtonText}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.forgotButton}
            onPress={() => navigation.navigate('Register')}>
            <Text style={styles.navButtonText}>
              Don't have an acount? Create here
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 10,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
  },
});
