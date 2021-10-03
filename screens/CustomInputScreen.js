import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, View } from 'react-native';
import { Button, Input } from 'react-native-elements';

const CustomInputScreen = ({ navigation }) => {

    const [year, setYear] = useState(null);
    const [lat, setLat] = useState(null);
    const [long, setLong] = useState(null);

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar style="light" />

            <View  style={styles.inputContainer}>
                <Input
                    placeholder="Enter the Year"
                    type="text"
                    value={year}
                    onChangeText={(text) => setYear(text)}
                />

                <Input
                    placeholder="Enter the Latitude"
                    type="text"
                    value={lat}
                    onChangeText={(text) => setLat(text)}
                />

                <Input
                    placeholder="Enter the Longitude"
                    type="text"
                    value={long}
                    onChangeText={(text) => setLong(text)}
                />
            </View>
            
            <Button title="Submit" containerStyle={styles.button} raised onPress={()=> navigation.navigate("Custom Location", {year: year, lat: lat, long: long })} /> 
        
        </KeyboardAvoidingView>
    )
}

export default CustomInputScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "white"
    },
    inputContainer: {
        width: 300,
    },
    button: {
        width: 300,
    }
})
