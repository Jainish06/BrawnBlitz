import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Mainpage = () => {
  return (
    <View>
      <Text style={styles.text}>Mainpage</Text>
    </View>
  )
}

export default Mainpage

const styles = StyleSheet.create({
    btmnav:{
      marginTop:100
    },
    text:{
      textAlign: 'center',
      color: 'black',
      fontWeight:'bold',
      fontSize: 20,
      fontFamily: 'Montserrat-SemiBold',
      },
})