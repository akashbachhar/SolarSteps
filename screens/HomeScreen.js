import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button, Image } from 'react-native-elements';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar style="light" />

            <Image source={require('../assets/solar-steps.png')}
                style={styles.logo}
            />

            <Text style={styles.text}> Measure the available sunshine :) </Text>

            <View>
                <Button title="Default" containerStyle={styles.button} raised onPress={() => navigation.navigate("Your Location")} />
                <Button title="Custom" containerStyle={styles.button} raised onPress={() => navigation.navigate("Input")} />
            </View>

        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "white"
    },
    logo: {
        height: 250,
        width: 250,
        marginBottom: 20,
    },
    button: {
        width: 300,
        marginTop: 10,
    },
    text:{
        fontSize: 20,
        marginBottom:10,
    }
})
