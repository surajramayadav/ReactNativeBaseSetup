import React from 'react';
import {Formik} from 'formik';
import {ActivityIndicator, Text, View} from 'react-native';
import FormikControl from './FormikControl';
import {Switch} from 'react-native-gesture-handler';
// import FormButton from '../Button/FormButton';
import {Button} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
// import {loginUser} from '../../redux/Slice/loginSlice';
// import config from '../../../config';
import * as Yup from 'yup';
import { setIsLogged } from '../../Redux/Slice/LoginSlice';

const StyledSwitch = ({formikKey, formikProps, label, ...rest}) => {
  return (
    <View style={{marginHorizontal: 20, marginVertical: 5}}>
      <Text style={{marginBottom: 3}}>{label}</Text>
      <Switch
        value={formikProps.values[formikKey]}
        onValueChange={(value) => {
          formikProps.setFieldValue(formikKey, value);
        }}
        {...rest}
      />
    </View>
  );
};

const InputForm = ({apiCall, inputData, title,onSubmit}) => {

  const dispatch = useDispatch()

  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-])|(\\([0-9]{2,3}\\)[ \\-])|([0-9]{2,4})[ \\-])?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  // const formValidationSchema = Yup.object().shape({
  //   email: Yup.string().email('Invalid email').required('Email is required !'),
  //   password: Yup.string().required('Password is required'),
   
  // });

  const onSubmitHandler = (values) => {
    // console.log(values);
    onSubmit(values)
  }
  

  const initialValues = {};

  return (
    <Formik
      initialValues={initialValues}
      // validationSchema={formValidationSchema}
      onSubmit={onSubmitHandler}>
      {(formikProps) => {
        return (
          <>
            {inputData.formData.map((value, index) => {
              // console.log(value,index)
              return (
                <FormikControl
                  key={index}
                  control={value.control}
                  label={value.labelValue}
                  formikProps={formikProps}
                  formikKey={value.formikKey}
                  placeholder={value.placeholder}
                  name={value.name}
                  errors={formikProps.errors}
                  secureTextEntry={value.secureTextEntry || false}
                />
              );
            })}

            {/* <StyledSwitch
              label="Agree to Terms"
              formikProps={formikProps}
              formikKey="agreeToTerms"
            /> */}
            {/* {inputData.button()} */}

            <Button
              // icon="camera"
              style={{marginTop: 10}}
              // loading={loading}
              mode="contained"
              onPress={formikProps.handleSubmit}>
              {inputData.title}
            </Button>
           
          </>
        );
      }}
    </Formik>
  );
};

export default InputForm;
