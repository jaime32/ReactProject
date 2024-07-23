import { View, Text, StyleSheet, StatusBar } from 'react-native'
import { Link, router } from 'expo-router'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

//components
import FormField from '@/components/FormField'
import CustomButton from '../../components/CustomButton'

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = () => {}

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={{fontSize: 20, textAlign: 'center'}}>Log in</Text>

        <FormField 
          title="Email"
          value={email}
          handleChangeText={setEmail}
          style={styles.inputBox}
        />

        <FormField 
          title="Password"
          value={password}
          handleChangeText={setPassword}
          style={styles.inputBox}
        />

        <CustomButton
        title="Sign In"
        handlePress={submit}
        style={styles.Signinbutton}
        // isLoading={isSubmitting}
        />

        <View style={styles.boxText}>
          <Text>No tienes cuenta?</Text>
          <Link style={{color:'red'}} href='/sign-up'> Sign Up </Link>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default SignIn

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
    margin: 20
  },
  inputBox:{
    backgroundColor: 'lightgray',
    marginVertical: 20, //puts margin on vertical origin
    marginHorizontal: 20, //puts margin on horizontal origin
    padding: 10,
    borderRadius: 10,
  },
  Signinbutton: {
    backgroundColor: 'orange',
    marginVertical: 10,
    padding: 10,
    alignItems: 'center',
    borderRadius: 15,
    marginHorizontal: 20,
  },
  boxText: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },

})