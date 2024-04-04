import { ScrollView, StyleSheet, Text, View, SafeAreaView, ImageBackground, TouchableOpacity } from 'react-native'
import {React, useState} from 'react'

// var count=0

const Report = () => {
  const [count, setCount] = useState(0);
  const [week, setWeek] = useState(0);

  const handleWorkoutUpdate = () => {
    setCount(prevCount => prevCount + 1)
    if(count%7 == 0){
      if(count!=0){
        setWeek(prevWeek => prevWeek + 1)
      }
    }
  };
  const handleWorkoutReset = () => {
    setCount(0)
    setWeek(0)
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <ImageBackground source={require('/Users/jainishpathak/Desktop/React-Native/BrawnBlitz/Components/gym7.jpeg')} style={styles.img}>
        <Text style={styles.text}>BrawnBlitz</Text>
        <Text style={styles.text2}>Your Personal Trainer</Text>
        <View style={styles.cont1}>
          <TouchableOpacity style={styles.card1} onPress={handleWorkoutUpdate}>
            <Text style={styles.text1}>+</Text>
          </TouchableOpacity>
          <View style={styles.card2}>
            <Text style={styles.text1}>Days : {count}</Text>
          </View>
        </View>
        <View style={styles.card3}>
          <Text style={styles.text1}>Weeks : {week}</Text>
        </View>
        <TouchableOpacity style={styles.card4} onPress={handleWorkoutReset}>
          <Text style={styles.text1}>Reset</Text>
        </TouchableOpacity>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Report

const styles = StyleSheet.create({
  cont1:{
    flex:1,
    justifyContent:'flex-start',
    flexDirection:'row',
    marginTop:100,
  },
  card1:{
    backgroundColor:'#919eab',
    margin:10,
    marginLeft:20,
    height:40,
    width:40,
    borderRadius:30,
    padding:3,
    elevation:20
  },
  card2:{
    backgroundColor:'#919eab',
    margin:10,
    marginLeft:30,
    height:40,
    width:250,
    borderRadius:30,
    padding:3,
    elevation:20
  },
  card3:{
    backgroundColor:'#919eab',
    marginLeft:100,
    margin:20,
    height:40,
    width:250,
    borderRadius:30,
    padding:3,
    elevation:20
  },
  card4:{
    backgroundColor:'#919eab',
    marginBottom:370,
    marginLeft:170,
    height:40,
    width:100,
    borderRadius:30,
    padding:3,
    elevation:20
  },
  img:{
    height:710
  },
  text:{
    textAlign: 'center',
    color: 'white',
    fontWeight:'bold',
    fontSize: 22,
    fontFamily: 'Montserrat-SemiBold',
    marginBottom:5
  },
  text1:{
    textAlign: 'center',
    color: 'white',
    fontWeight:'bold',
    fontSize: 18,
    fontFamily: 'Montserrat-SemiBold',
  },
  text2:{
    textAlign: 'center',
    color: 'white',
    fontWeight:'bold',
    fontSize: 22,
    fontFamily: 'Montserrat-SemiBold',
    marginTop:1,
  },
})