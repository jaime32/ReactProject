import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View, SafeAreaView} from "react-native";
import { Redirect, Link, router } from 'expo-router'
import React from "react";

import CustomButton from "@/components/CustomButton";

export default function App() {
    return (
    <SafeAreaView>
        <View style={styles.container}>
            <Image style={styles.image1} source={require('@/assets/images/cards.png')}/>
            <Text style={styles.welcome}>Welcome to my App!</Text>
            <CustomButton
                title="Log In"
                handlePress={() => router.push('/sign-in')}
                style={styles.buttonStyle}
            />
        </View>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image1:{
        alignItems: 'center',
        justifyContent: 'center',
        width: 300,
        height: 400,
        resizeMode: 'contain'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 20,
    },
    buttonStyle: {
        backgroundColor: 'orange',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
    }

})