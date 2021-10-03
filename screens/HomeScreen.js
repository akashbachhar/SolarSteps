import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Input } from 'react-native-elements';

const HomeScreen = ({navigation}) => {
    return (
        <View>
            <Text>Solar Steps</Text>
            <Button title="Use Default Location" onPress={()=> navigation.navigate("DefaultResult")} /> 
            <Button title="Use Custom Location" onPress={()=> navigation.navigate("CustomInput")} /> 
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
