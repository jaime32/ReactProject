import { StyleSheet, Text, View } from 'react-native'
import { Slot, SplashScreen, Stack } from 'expo-router'
import React, { useEffect } from 'react'
import { useFonts } from 'expo-font';

SplashScreen.preventAutoHideAsync();


const RootLayout  = () => {

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: true }} />
      <Stack.Screen name="(auth)" options={{ headerShown: true }} />
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  )
}

export default RootLayout
