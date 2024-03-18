import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Bmi } from './Detailspage'
import firestore from '@react-native-firebase/firestore';


const Bmipage = ({navigation}) => {


// Reference to the collection
// const usersCollection = firestore().collection('users');
// var Bmi
// // Query the collection to get the data
// usersCollection.get().then((querySnapshot) => {
//   querySnapshot.forEach((documentSnapshot) => {
//     // Access field data
//     const {bmi} = documentSnapshot.data();
//     console.log(bmi);
//     Bmi = bmi
//   });
// });

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Your BMI is {Bmi}.</Text>
      <Text style={styles.text}>Let's get started!.</Text>
      <TouchableOpacity
        style={styles.btnCont}
        activeOpacity={0.4}
        onPress={() => navigation.navigate('Mainpage')}>
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