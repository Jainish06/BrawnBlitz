import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { bmi } from './Detailspage'

const Bmipage = () => {
  return (
    <View>
      <Text style={styles.text}>Your BMI is {bmi}.</Text>
    </View>
  )
}

export default Bmipage

const styles = StyleSheet.create({
  text:{
    textAlign: 'center',
    color: 'black',
    fontWeight:'bold',
    fontSize: 20,
    fontFamily: 'Montserrat-SemiBold',
  }
})