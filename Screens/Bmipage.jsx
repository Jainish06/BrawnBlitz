import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import firestore from '@react-native-firebase/firestore';
import { Bmi } from './Detailspage';

const Bmipage = ({navigation}) => {
  const [userBMI, setBMI] = useState(null)

  useEffect(() => {
      setBMI(Bmi);
    });

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Your BMI is {userBMI}.</Text>
      <Text style={styles.text}>Let's get started!.</Text>
      <TouchableOpacity
        style={styles.btnCont}
        activeOpacity={0.4}
        onPress={() => navigation.navigate('Bottomnav')}>
        <Text style={styles.btnText}>Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Bmipage

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    backgroundColor: 'black',
  },
  text:{
    textAlign: 'center',
    color: 'white',
    fontWeight:'bold',
    fontSize: 20,
    fontFamily: 'Montserrat-SemiBold',
  },
  btnCont: {
    backgroundColor: '#2563eb',
    width: '60%',
    paddingVertical: 12,
    borderRadius: 8,
    elevation: 14,
    shadowColor: '#2563eb',
    marginLeft:75,
    marginBottom:10,
    marginTop:10,
  },
  btnText: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 18,
    fontFamily: 'Montserrat-SemiBold',
  },
})