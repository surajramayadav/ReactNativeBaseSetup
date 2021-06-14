// import {ErrorMessage, Field} from 'formik';
import { ErrorMessage } from 'formik';
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
// import TextError from './TextError';


import AntDesign from 'react-native-vector-icons/AntDesign';
import TextError from './TextError';

const StyledInput = ({ label, key, index,errors,name, formikProps, formikKey, ...rest }) => {
  console.log(errors)
  let val=label.toLowerCase()
  return (
    <View style={{ marginVertical: 10 }}>
      <TextInput
        label={label}
        name={name}
        mode='outlined'
        onChangeText={formikProps.handleChange(formikKey)}
        onBlur={formikProps.handleBlur(formikKey)}
        {...rest}
      />
      {
         Object.values(errors).length !==0 &&  <Text style={{color: 'red',marginTop:5}}>{errors[val]}</Text>
      }

    </View>
  );
}
export default StyledInput;
