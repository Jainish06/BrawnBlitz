import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Report = () => {
  return (
    <View>
      <Text style={styles.text}>Report</Text>
    </View>
  )
}

export default Report

const styles = StyleSheet.create({
    text:{
        textAlign: 'center',
        color: 'black',
        fontWeight:'bold',
        fontSize: 20,
        fontFamily: 'Montserrat-SemiBold',
        },
})