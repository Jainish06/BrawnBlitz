import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView, ImageBackground, useColorScheme} from 'react-native'
import React, { useState } from 'react'
import { useNavigation} from '@react-navigation/native';
import { TextInput } from 'react-native-paper';
import database from '@react-native-firebase/database';
import firestore from '@react-native-firebase/firestore';

var Bmi

export default function Detailspage() {
  const navigation = useNavigation();
  const colorScheme = useColorScheme() === 'dark'

  //Adding data to firebase usestate functions.
  const [Input1, setInput1] = useState(null);
  const [Input2, setInput2] = useState(null);
  const [Input3, setInput3] = useState(null);
  const [Input4, setInput4] = useState(null);
  const [Input5, setInput5] = useState(null);
  const [Input6, setInput6] = useState(null); 
  const [list, setList] = useState(null);
  const ref = firestore().collection('users')

  const handleAddData = async() => {
    try {
      ref
      .add({
        height : Input1,
        weight : Input2,
        age : Input3,
        gender : Input4,
        activity : Input5,
        goal : Input6,
        bmi : (Input2/((Input1/100)*(Input1/100))).toFixed(2),
      })
      .then(() => console.log('Data set.'));
    } catch (error) {
      
    }
  }

  // Bmi = Input2/((Input1/100)*(Input1/100))
  // Bmi = Bmi.toFixed(2)
  
  return (
    <SafeAreaView style={styles.test}>
        <ScrollView>
          <Text style={colorScheme ? styles.dark : styles.white}>BrawnBlitz</Text>
          <Text style={colorScheme ? styles.dark1 : styles.white1}>Your Personel Trainer</Text>
            <View style={styles.card}> 
            <TextInput
            mode='flat'
            placeholder='Height in cms'
            style={styles.input1}
            value={Input1}
            onChangeText={value => setInput1(value)}>
            </TextInput>
            <TextInput
            placeholder='Weight in Kgs'
            style={styles.input2}
            value={Input2}
            onChangeText={value => setInput2(value)}>
            </TextInput>
            <TextInput
            placeholder='Age'
            style={styles.input3}
            value={Input3}
            onChangeText={value => setInput3(value)}>
            </TextInput>
            <TextInput
            placeholder='Gender'
            style={styles.input4}
            value={Input4}
            onChangeText={value => setInput4(value)}>
            </TextInput>
            <TextInput
            placeholder='Activity level'
            style={styles.input5}
            value={Input5}
            onChangeText={value => setInput5(value)}>
            </TextInput>
            <TextInput
            placeholder='Goal'
            style={styles.input6}
            value={Input6}
            onChangeText={value => setInput6(value)}>
            </TextInput>
            </View>
            <TouchableOpacity
            style={styles.btnCont}
            onPress={() => navigation.navigate('Bmipage')}
            onPressIn={() => handleAddData()}>
              <Text style={styles.btnText}>Submit</Text>
            </TouchableOpacity>
        </ScrollView>
    </SafeAreaView>
  )
}

export {Bmi}

const styles = StyleSheet.create({
  test:{
    flex:1,
    backgroundColor: 'black',
    justifyContent:'center',
    alignItems: 'center',
  },
  white:{
    color:'#b3d9ff',
    fontSize:25,
    fontWeight: 'bold',
    fontFamily:'TimesNewRoman',
    letterSpacing: 10,
    textAlign: 'center',
    marginTop: 3,
  },
  dark:{
    color:'#b3d9ff',
    fontSize:25,
    fontWeight: 'bold',
    fontFamily:'TimesNewRoman',
    letterSpacing: 10,
    textAlign: 'center',
    marginTop: 3,
  },
  white1:{
    color:'#b3d9ff',
    fontSize:15,
    fontWeight: 'bold',
    fontFamily:'TimesNewRoman',
    letterSpacing: 2,
    textAlign: 'center',
    marginTop: 3,
  },
  dark1:{
    color:'#b3d9ff',
    fontSize:15,
    fontWeight: 'bold',
    fontFamily:'TimesNewRoman',
    letterSpacing: 2,
    textAlign: 'center',
    marginTop: 3,
  },
  card:{
    flex: 1,
    flexDirection :'column',
    width:280,
    height:500,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 110,
    padding:5,
    borderRadius: 15,
    opacity:10,
    backgroundColor: '#b3d9ff'
  },
  text:{
    textAlign: 'center',
    color: '#b3d9ff',
    fontWeight:'bold',
    fontSize: 20,
    fontFamily: 'Montserrat-SemiBold',
  },
  btnCont: {
    flex :1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2563eb',
    width: '60%',
    paddingVertical: 12,
    borderRadius: 8,
    elevation: 14,
    shadowColor: '#2563eb',
    marginTop:10,
    marginLeft:50
  },
  btnText: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 18,
    fontFamily: 'Montserrat-SemiBold',
  },
  input1: {
    fontSize: 16,
    textAlign:'center',
    borderColor: '#9ca3af',
    backgroundColor: '#b3d9ff',
    borderRadius: 4,
    paddingHorizontal: 50,
    marginBottom: 20,
    color: '#000',
    fontFamily: 'Montserrat-Medium',
  },
  input2: {
    fontSize: 16,
    textAlign:'center',
    borderColor: '#9ca3af',
    backgroundColor: '#b3d9ff',
    borderRadius: 4,
    paddingHorizontal: 50,
    marginBottom: 20,
    color: '#000',
    fontFamily: 'Montserrat-Medium',
  },
  input3: {
    fontSize: 16,
    textAlign:'center',
    borderColor: '#9ca3af',
    backgroundColor: '#b3d9ff',
    borderRadius: 4,
    paddingHorizontal: 50,
    marginBottom: 20,
    color: '#000',
    fontFamily: 'Montserrat-Medium',
  },
  input4: {
    fontSize: 16,
    textAlign:'center',
    borderColor: '#9ca3af',
    backgroundColor: '#b3d9ff',
    borderRadius: 4,
    paddingHorizontal: 50,
    marginBottom: 20,
    color: '#000',
    fontFamily: 'Montserrat-Medium',
  },
  input5: {
    fontSize: 16,
    textAlign:'center',
    borderColor: '#9ca3af',
    backgroundColor: '#b3d9ff',
    borderRadius: 4,
    paddingHorizontal: 50,
    marginBottom: 20,
    color: '#000',
    fontFamily: 'Montserrat-Medium',
  },
  input6: {
    fontSize: 16,
    textAlign:'center',
    borderColor: '#9ca3af',
    backgroundColor: '#b3d9ff',
    borderRadius: 4,
    paddingHorizontal: 80,
    marginBottom: 20,
    color: '#000',
    fontFamily: 'Montserrat-Medium',
  },
})