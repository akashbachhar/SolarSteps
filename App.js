import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import CustomInputScreen from './screens/CustomInputScreen';
import CustomResult from './screens/CustomResult';
import DefaultResult from './screens/DefaultResult';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CustomInput" component={CustomInputScreen} />
        <Stack.Screen name="CustomResult" component={CustomResult} />
        <Stack.Screen name="DefaultResult" component={DefaultResult} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
