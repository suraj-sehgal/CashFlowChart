import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import DataContext from './context/DataContext';

const InputForm = ({navigation}) => {
  const {name, setName, address, setAddress,expenses,setExpenses} = useContext(DataContext)

  const handleNameChange = (text) => {
    setName(text);
  };

  const handleAddressChange = (text) => {
    setAddress(text);
  };

  const handleExpenseChange = (category, amount) => {
    setExpenses((prevExpenses) => ({
      ...prevExpenses,
      [category]: amount,
    }));
  };

  const handleSubmit = () => {
        navigation.navigate('DataVisualisation')
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Data Entry Form</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name:</Text>
        <TextInput
          style={styles.input}
          onChangeText={handleNameChange}
          value={name}
          placeholder="Enter name"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Address:</Text>
        <TextInput
          style={styles.input}
          onChangeText={handleAddressChange}
          value={address}
          placeholder="Enter address"
        />
      </View>
      <Text style={styles.label}>Expenses:</Text>
      {Object.keys(expenses).map((category, index) => (
        <View key={index} style={styles.inputContainer}>
          <Text style={styles.categoryLabel}>{category}:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(amount) => handleExpenseChange(category, amount)}
            value={expenses[category]}
            placeholder={`Enter amount`}
            keyboardType="numeric"
          />
        </View>
      ))}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={{fontSize:18,color:'white'}}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  categoryLabel: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
    color: '#333',
  },
  button:{
    alignItems:'center',
    marginBottom:10,
    backgroundColor:'#1a53ff',
    width:100,
    padding:5,
  },
  
});

export default InputForm;
