import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView, ImageBackground, useColorScheme} from 'react-native'
import React from 'react'
import { useNavigation} from '@react-navigation/native';
import { TextInput } from 'react-native-paper';

export default function Detailspage() {
  const navigation = useNavigation();
  const colorScheme = useColorScheme() === 'dark'
  return (
    <SafeAreaView style={styles.test}>
        <ScrollView>
          <Text style={colorScheme ? styles.dark : styles.white}>BrawnBlitz</Text>
          <Text style={colorScheme ? styles.dark1 : styles.white1}>Your Personel Trainer</Text>
            <View style={styles.card}> 
            <TextInput
            mode='flat'
            placeholder='Height in cms'
            style={styles.input1}>
            </TextInput>
            <TextInput
            placeholder='Wieght in Kgs'
            style={styles.input2}>
            </TextInput>
            <TextInput
            placeholder='Age'
            style={styles.input3}>
            </TextInput>
            <TextInput
            placeholder='Gender'
            style={styles.input4}>
            </TextInput>
            <TextInput
            placeholder='Activity level'
            style={styles.input5}>
            </TextInput>
            <TextInput
            placeholder='Goal'
            style={styles.input6}>
            </TextInput>
            </View>
            <TouchableOpacity
            style={styles.btnCont}
            onPress={() => navigation.navigate('bmipage')}>
              <Text style={styles.btnText}>Submit</Text>
            </TouchableOpacity>
        </ScrollView>
    </SafeAreaView>
  )
}

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
    paddingHorizontal: 70,
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
    paddingHorizontal: 70,
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
    paddingHorizontal: 70,
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
    paddingHorizontal: 70,
    marginBottom: 20,
    color: '#000',
    fontFamily: 'Montserrat-Medium',
  },
})