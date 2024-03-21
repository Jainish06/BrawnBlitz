import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Discover = () => {
  return (
    <View>
      <Text style={styles.text}>Discover</Text>
    </View>
  )
}

export default Discover

const styles = StyleSheet.create({
  text:{
    textAlign: 'center',
    color: 'black',
    fontWeight:'bold',
    fontSize: 20,
    fontFamily: 'Montserrat-SemiBold',
    },
})