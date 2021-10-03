import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Input } from 'react-native-elements';

const HomeScreen = ({ navigation }) => {

    const [year, setYear] = useState(null);
    const [lat, setLat] = useState(null);
    const [long, setLong] = useState(null);

    return (
        <View>
            <Text>Custom Input </Text>
            <View>
                <Input
                    placeholder="Year"
                    type="text"
                    value={year}
                    onChangeText={(text) => setYear(text)}
                />
                <Input
                    placeholder="Lat"
                    type="text"
                    value={lat}
                    onChangeText={(text) => setLat(text)}
                />
                <Input
                    placeholder="Long"
                    type="text"
                    value={long}
                    onChangeText={(text) => setLong(text)}
                />
            </View>

            <Button title="See the Result" onPress={()=> navigation.navigate("CustomResult", {year: year, lat: lat, long: long })} /> 

        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
