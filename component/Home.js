import React from "react";
import { Button, ScrollView, StatusBar, StyleSheet, Text, View, } from 'react-native';
import InputForm from "./InputForm";


const Home = ({ navigation }) => {


  return (
    <View style={styles.parent}>
      <StatusBar />
      <View style={styles.title}>
        <Text style={styles.titleText}>Welcome to CashFlowChart</Text>
      </View>
      <ScrollView>
        <InputForm navigation={navigation} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor:'#ffcccc',
  },
  title: {
    height:70,
    justifyContent:'center',
  },
  titleText: {
    fontSize: 24,
    textAlign: "center",
    color: 'green',
    fontWeight: "bold",
  },
});

export default Home;