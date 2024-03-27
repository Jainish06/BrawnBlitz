import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView, ImageBackground, useColorScheme} from 'react-native'
import React,  { useState, useEffect } from 'react'
import { useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export default function Homepage() {

  // const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    if(user){
      setUser(user);}
    else{
      setUser(null)
    }
    // if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  // if (initializing) return null;

  const navigation = useNavigation();
  const colorScheme = useColorScheme() === 'dark'

  return (
    <SafeAreaView style={styles.test}>
      <ImageBackground source={require('./peakpx.jpg')} style={styles.img}>
        <ScrollView>
          <Text style={colorScheme ? styles.dark : styles.white}>BrawnBlitz</Text>
          <Text style={colorScheme ? styles.dark1 : styles.white1}>Your Personel Trainer</Text>
          <View style={styles.container}>
            <View style={styles.card}>
              <TouchableOpacity  
                onPress={() => {user ? navigation.navigate('Mainpage') : navigation.navigate('Loginpage')}}
                style={styles.button}>
                <Text style={styles.text}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity  
                onPress={() => navigation.navigate('Signuppage')}
                style={styles.button}>
                <Text style={styles.text}>Sign-Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  test:{
    flex:1,
  },
  white:{
    color:'white',
    fontSize:25,
    fontWeight: 'bold',
    fontFamily:'TimesNewRoman',
    letterSpacing: 10,
    textAlign: 'center',
    marginTop: 3,
  },
  dark:{
    color:'white',
    fontSize:25,
    fontWeight: 'bold',
    fontFamily:'TimesNewRoman',
    letterSpacing: 10,
    textAlign: 'center',
    marginTop: 3,
  },
  white1:{
    color:'white',
    fontSize:15,
    fontWeight: 'bold',
    fontFamily:'TimesNewRoman',
    letterSpacing: 2,
    textAlign: 'center',
    marginTop: 3,
  },
  dark1:{
    color:'white',
    fontSize:15,
    fontWeight: 'bold',
    fontFamily:'TimesNewRoman',
    letterSpacing: 2,
    textAlign: 'center',
    marginTop: 3,
  },
  img:{
    width:'100%',
    height:'100%',
    position:'absolute'
  },
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    marginTop: 470,
  },
  card:{
    flex: 1,
    flexDirection :'row',
    width:200,
    height:200,
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 5,
    padding:5,
    borderRadius: 15,
    opacity:10
  },
  button:{
    backgroundColor: 'white',
    width: '45%',
    paddingVertical: 7,
    borderRadius: 20,
    elevation: 12,
    shadowColor: '#2563eb',
    marginLeft:10
  },
  text:{
    textAlign: 'center',
    color: 'black',
    fontWeight:'bold',
    fontSize: 20,
    fontFamily: 'Montserrat-SemiBold',
  }
})