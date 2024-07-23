import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <SafeAreaView>
      {/* <View style={styles.container}> */}
        <Text> Report a Problem</Text>
      {/* </View> */}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    textAlign: 'center'
  },
})

export default Home