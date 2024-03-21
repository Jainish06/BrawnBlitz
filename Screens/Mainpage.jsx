import { StyleSheet, Text, View} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Mainpage = () => {
  return (
    <SafeAreaView style={styles.cont}>
      <View>
        <Text style={styles.text}>Mainpage</Text>
      </View>
    </SafeAreaView>
  )
}

export default Mainpage

const styles = StyleSheet.create({
    cont:{
      flex:1,
      backgroundColor:'black'
    },
    text:{
      textAlign: 'center',
      color: 'white',
      fontWeight:'bold',
      fontSize: 20,
      fontFamily: 'Montserrat-SemiBold',
      },
})