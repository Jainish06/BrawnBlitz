import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import { Bmi } from './Detailspage'

const Bmipage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Your BMI is {Bmi}.</Text>
    </SafeAreaView>
  )
}

export default Bmipage

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'black'
  },
  text:{
    textAlign: 'center',
    color: 'white',
    fontWeight:'bold',
    fontSize: 20,
    fontFamily: 'Montserrat-SemiBold',
  }
})