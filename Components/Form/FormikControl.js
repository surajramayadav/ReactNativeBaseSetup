import React from 'react';
// import Textarea from './InputType/Textarea';
// import Select from './InputType/Select';
// import RadioButtons from './InputType/RadioButtons';
// import CheckboxGroup from './InputType/CheckboxGroup';
// import DatePicker from './InputType/DatePicker';
import StyledInput from './InputType/Input';

const FormikControl = ({control, label, formikProps, formikKey, ...rest}) => {
  switch (control) {
    case 'input':
      return (
        <StyledInput
          label={label}
          formikProps={formikProps}
          formikKey={formikKey}
          {...rest}
        />
      );
    case 'textarea':
      return <Textarea {...rest} />;
    case 'select':
      return <Select {...rest} />;
    case 'radio':
      return <RadioButtons {...rest} />;
    case 'checkbox':
      return <CheckboxGroup {...rest} />;
    case 'date':
      return <DatePicker {...rest} />;
    default:
      console.log('default');
      return null;
  }
};

export default FormikControl;
