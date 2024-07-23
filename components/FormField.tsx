import { StyleProp, View, TextInput, ViewStyle } from 'react-native'
import React from 'react';

interface FormFieldProps {
  title: string;
  value: string;
  handleChangeText: (text: string) => void;
  style: StyleProp<ViewStyle>;
}

const FormField = (props: FormFieldProps) => {
  return (
    <View style={props.style}>
      <TextInput
        placeholder={props.title}
        value={props.value}
        onChangeText={props.handleChangeText}
      />
    </View>
  )
}

export default FormField