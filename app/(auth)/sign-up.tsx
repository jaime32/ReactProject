import { View, Text, StyleSheet } from 'react-native'
import { Link } from 'expo-router'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import FormField from '@/components/FormField'
import CustomButton from '@/components/CustomButton'


const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');

  const submit = () => {}

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={{fontSize: 20, textAlign: 'center'}}>Sign Up</Text>

        <FormField
          title="First Name"
          value={fname}
          handleChangeText={setFname}
          style={styles.inputBox2}
        />

        <FormField
          title="Last Name"
          value={lname}
          handleChangeText={setLname}
          style={styles.inputBox2}
        />

        <FormField
          title="Email"
          value={email}
          handleChangeText={setEmail}
          style={styles.inputBox2}
        />

        <FormField 
          title="Password"
          value={password}
          handleChangeText={setPassword}
          style={styles.inputBox2}
        />

        <FormField 
          title="Confirm Password"
          value={cpassword}
          handleChangeText={setCpassword}
          style={styles.inputBox2}
        />

        <CustomButton
          title="Sign Up"
          handlePress={submit}
          style={styles.Signupbutton}
        />

        <View style={styles.boxText}>
          <Text>Tienes cuenta?</Text>
          <Link style={{color: 'red'}} href='/sign-in'> Log In</Link>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default SignUp

const styles = StyleSheet.create({
  container: {

  },
  inputBox2: {
    backgroundColor: 'lightgray',
    marginVertical: 20,
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 10,
  },
  Signupbutton: {
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
  }
})