import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import * as Location from 'expo-location';
import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native";
import { Image } from 'react-native-elements';

const DefaultResult = () => {
    const [location, setLocation] = useState({});

    const [errorMsg, setErrorMsg] = useState(null);

    const [janData, setJanData] = useState(null);
    const [febData, setFebData] = useState(null);
    const [marData, setMarData] = useState(null);
    const [aprData, setAprData] = useState(null);
    const [mayData, setMayData] = useState(null);
    const [junData, setJunData] = useState(null);
    const [julData, setJulData] = useState(null);
    const [augData, setAugData] = useState(null);
    const [sepData, setSepData] = useState(null);
    const [octData, setOctData] = useState(null);
    const [novData, setNovData] = useState(null);
    const [decData, setDecData] = useState(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getLastKnownPositionAsync({});

            setLocation(location.coords);
            const { latitude, longitude } = location.coords;

            try {
                const response = await fetch(
                    `https://power.larc.nasa.gov/api/temporal/monthly/point?parameters=ALLSKY_SFC_SW_DWN&community=RE&longitude=${longitude}&latitude=${latitude}&format=JSON&start=2020&end=2020`
                    //`https://power.larc.nasa.gov/api/temporal/monthly/point?parameters=ALLSKY_SFC_SW_DWN&community=RE&longitude=85&latitude=25&format=JSON&start=2020&end=2020`
                );
                const json = await response.json();

                setJanData(json.properties.parameter.ALLSKY_SFC_SW_DWN[202001])
                setFebData(json.properties.parameter.ALLSKY_SFC_SW_DWN[202002])
                setMarData(json.properties.parameter.ALLSKY_SFC_SW_DWN[202003])
                setAprData(json.properties.parameter.ALLSKY_SFC_SW_DWN[202004])
                setMayData(json.properties.parameter.ALLSKY_SFC_SW_DWN[202005])
                setJunData(json.properties.parameter.ALLSKY_SFC_SW_DWN[202006])
                setJulData(json.properties.parameter.ALLSKY_SFC_SW_DWN[202007])
                setAugData(json.properties.parameter.ALLSKY_SFC_SW_DWN[202008])
                setSepData(json.properties.parameter.ALLSKY_SFC_SW_DWN[202009])
                setOctData(json.properties.parameter.ALLSKY_SFC_SW_DWN[202010])
                setNovData(json.properties.parameter.ALLSKY_SFC_SW_DWN[202011])
                setDecData(json.properties.parameter.ALLSKY_SFC_SW_DWN[202012])

            } catch (error) {
                Alert.alert(error);
            }

        })();
    }, []);

    const graphData = [
        { month: "Jan", solarData: janData },
        { month: "Feb", solarData: febData },
        { month: "Mar", solarData: marData },
        { month: "Apr", solarData: aprData },
        { month: "May", solarData: mayData },
        { month: "Jun", solarData: junData },
        { month: "Jul", solarData: julData },
        { month: "Aug", solarData: augData },
        { month: "Sept", solarData: sepData },
        { month: "Oct", solarData: octData },
        { month: "Nov", solarData: novData },
        { month: "Dec", solarData: decData },
    ];

    return (
        <View style={styles.container}>
            <View style={styles.dataContainer}>
                <Text style={styles.text}> Year: 2020 </Text>
                <Text style={styles.text}> Latitude : {location.latitude}   Longitude : {location.longitude} </Text>
            </View>

            <VictoryChart width={350} theme={VictoryTheme.material}>
                <VictoryBar style={{ data: { fill: "#c43a31" } }} data={graphData} x="month" y="solarData" />
            </VictoryChart>

            <Image source={require('../assets/nasa.png')}
                style={styles.nasaLogo}
            />

        </View>
    )
}

export default DefaultResult

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "white"
    },
    dataContainer: {
        borderWidth: 0.5,
        borderColor: "black",
        borderRadius: 5,
        width: "100%",
        backgroundColor: "#e3ff00",
        padding: 10,


        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,

    },
    text: {
        fontSize: 20,
        textAlign: "center",
    },
    nasaLogo: {
        marginTop: 20,
        height: 50,
        width: 125,
    }
})
