import React, { useContext } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import DataContext from './context/DataContext';
import BarGraph from './graph/BarGraph';


const DataVisualisation = ({navigation}) => {
    const { name, expenses } = useContext(DataContext);
    console.log(name);

    const handleButton=()=>{
        navigation.navigate('Home')
    }

    return (
        <View style={styles.parent}>
            <ScrollView >
                <Text style={{ fontSize: 24, textAlign: 'center', color: 'black', fontWeight: 'bold' }}>Hello, {name}</Text>
                <View>
                    <Text style={styles.text}>Tr:Transportation  Ho:Housing  En:Entertainment</Text>
                    <Text style={styles.text}>Ed:Education  He:Healthcare  Ut:Utilities</Text>
                    <Text style={styles.text}>Mi:Miscellaneous</Text>
                </View>
                <Text style={styles.text} >Visualisation of Expenses</Text>
                <BarGraph expenses={expenses} />
            </ScrollView>
            <TouchableOpacity style={styles.tButton} onPress={handleButton}>
                <Text>Go To Home</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        backgroundColor: 'white',
        alignContent:'center',
        justifyContent:'center'
    },
    text:{
        textAlign:'center',
    },
    tButton:{
        alignItems:'center',
        margin:10,
        backgroundColor:'#1a53ff',
        width:100,
        padding:5,
    },
})

export default DataVisualisation;