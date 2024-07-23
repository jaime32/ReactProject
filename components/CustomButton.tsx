import { TouchableOpacity, Text, StyleSheet, StyleProp, ViewStyle, GestureResponderEvent} from 'react-native'
import React from 'react'

interface CustomButtonProps {
  title: string;
  handlePress: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
}

const CustomButton = (props: CustomButtonProps ) => {
  return (
    <TouchableOpacity 
      style={props.style}
      onPress={props.handlePress}
    >
      <Text style={styles.buttonLabel}> {props.title} </Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
  buttonLabel: {
    color:'white',
    fontWeight: 900,
  }
})