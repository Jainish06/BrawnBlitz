import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Discover = () => {
  return (
    <SafeAreaView style={styles.cont}>
      <ScrollView>
        <ImageBackground source={require('./gym.jpeg')} style={styles.img}>
          <Text style={styles.text}>BrawnBlitz</Text>
          <Text style={styles.text2}>Your Personal Trainer</Text>
          <ScrollView horizontal={true} style={styles.cont1}>
            <TouchableOpacity style={styles.card1}>
              <Text style={styles.text1}>You</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card1}>
              <Text style={styles.text1}>You</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card1}>
              <Text style={styles.text1}>You</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card1}>
              <Text style={styles.text1}>You</Text>
            </TouchableOpacity>
          </ScrollView>
          <ScrollView>
            <TouchableOpacity style={styles.card1}>
              <Text style={styles.text1}>You</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card1}>
              <Text style={styles.text1}>You</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card1}>
              <Text style={styles.text1}>You</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card1}>
              <Text style={styles.text1}>You</Text>
            </TouchableOpacity>
          </ScrollView>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Discover

const styles = StyleSheet.create({
  cont:{
    flex:1,
    justifyContent:'center',
    backgroundColor:'white',
  },
  cont1:{
    height:230
  },
  row:{
    flex:1,
    flexDirection:'row'
  },
  card1:{
    flex:1,
    backgroundColor:'#EDD187',
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center',
    marginBottom:10,
    height:130,
    width:200,
    margin:8,
    borderRadius:20,
    elevation:20,
  },
  card2:{
    backgroundColor:'#EAE1C2',
    marginLeft:20,
    marginTop:70,
    height:100,
    width:100,
    borderRadius:20,
    padding:3,
    elevation:20
  },
  card3:{
    backgroundColor:'#EAE1C2',
    marginLeft:20,
    marginTop:70,
    height:100,
    width:100,
    borderRadius:20,
    padding:3,
    elevation:20
  },
  card4:{
    backgroundColor:'#EAE1C2',
    marginLeft:20,
    marginTop:70,
    height:100,
    width:100,
    borderRadius:20,
    padding:3,
    elevation:20
  },
  card5:{
    backgroundColor:'#EAE1C2',
    marginLeft:20,
    height:100,
    width:100,
    borderRadius:20,
    padding:3,
    elevation:20
  },
  card6:{
    backgroundColor:'#EAE1C2',
    marginLeft:20,
    height:100,
    width:100,
    borderRadius:20,
    padding:3,
    elevation:20
  },
  card7:{
    backgroundColor:'#EAE1C2',
    marginLeft:20,
    height:100,
    width:100,
    borderRadius:20,
    padding:3,
    elevation:20
  },
  text:{
    textAlign: 'center',
    color: 'black',
    fontWeight:'bold',
    fontSize: 20,
    fontFamily: 'Montserrat-SemiBold',
    marginTop:10,
    marginBottom:5
  },
  text1:{
    textAlign: 'center',
    color: 'black',
    fontWeight:'bold',
    fontSize: 20,
    fontFamily: 'Montserrat-SemiBold',
    marginTop:20,
    marginBottom:10
  },
  text2:{
    textAlign: 'center',
    color: 'black',
    fontWeight:'bold',
    fontSize: 20,
    fontFamily: 'Montserrat-SemiBold',
    marginTop:1,
    marginBottom:30
  },
  img:{
    height:710
  },
})