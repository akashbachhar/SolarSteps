import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native";
import { Image } from 'react-native-elements';

const CustomResult = ({ route, navigation }) => {
    const year = route.params.year;
    const long = route.params.long;
    const lat = route.params.lat;
    const months = [`${year}01`, `${year}02`, `${year}03`, `${year}04`, `${year}05`, `${year}06`, `${year}07`, `${year}08`, `${year}09`, `${year}10`, `${year}11`, `${year}12`];

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

    const getMoviesFromApiAsync = async () => {
        try {
            const response = await fetch(
                `https://power.larc.nasa.gov/api/temporal/monthly/point?parameters=ALLSKY_SFC_SW_DWN&community=RE&longitude=${long}&latitude=${lat}&format=JSON&start=${year}&end=${year}`
            );
            const json = await response.json();

            setJanData(json.properties.parameter.ALLSKY_SFC_SW_DWN[months[0]])
            setFebData(json.properties.parameter.ALLSKY_SFC_SW_DWN[months[1]])
            setMarData(json.properties.parameter.ALLSKY_SFC_SW_DWN[months[2]])
            setAprData(json.properties.parameter.ALLSKY_SFC_SW_DWN[months[3]])
            setMayData(json.properties.parameter.ALLSKY_SFC_SW_DWN[months[4]])
            setJunData(json.properties.parameter.ALLSKY_SFC_SW_DWN[months[5]])
            setJulData(json.properties.parameter.ALLSKY_SFC_SW_DWN[months[6]])
            setAugData(json.properties.parameter.ALLSKY_SFC_SW_DWN[months[7]])
            setSepData(json.properties.parameter.ALLSKY_SFC_SW_DWN[months[8]])
            setOctData(json.properties.parameter.ALLSKY_SFC_SW_DWN[months[9]])
            setNovData(json.properties.parameter.ALLSKY_SFC_SW_DWN[months[10]])
            setDecData(json.properties.parameter.ALLSKY_SFC_SW_DWN[months[11]])

        } catch (error) {
            console.error(error);
        }
    };

    getMoviesFromApiAsync();

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
                <Text style={styles.text}> Year: {year} </Text>
                <Text style={styles.text}> Latitude: {lat}   Longitude: {long}  </Text>
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

export default CustomResult

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
