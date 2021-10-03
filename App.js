import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import CustomInputScreen from './screens/CustomInputScreen';
import CustomResult from './screens/CustomResult';
import DefaultResult from './screens/DefaultResult';

const Stack = createStackNavigator();

const globalScreenOption = {
  headerStyle: {backgroundColor: "#ffc40c"},
  headerTitleStyle: {color: "#ffffff"},
  headerTintColor: {color : "#ffffff"}
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenOption}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Input" component={CustomInputScreen} />
        <Stack.Screen name="Custom Location" component={CustomResult} />
        <Stack.Screen name="Your Location" component={DefaultResult} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
