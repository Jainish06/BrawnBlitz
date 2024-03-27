import { StyleSheet, Text, View, TouchableOpacity, ImageBackground} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState, useEffect } from 'react'
import database from '@react-native-firebase/database';
import firestore from '@react-native-firebase/firestore';
import { firebase } from '@react-native-firebase/auth';


const Mainpage = () => {
  // const [userData, setUserData] = useState(null);

  // useEffect(() => {
  //   const unsubscribe = firestore().collection('users').onSnapshot((querySnapshot) => {
  //     const data = [];
  //     querySnapshot.forEach((doc) => {
  //       data.push({ id: doc.id, ...doc.data() });
  //     });
  //     // Update the state with the retrieved user data
  //     setUserData(data);
  //     console.log(data)
  //   });

  //   return () => unsubscribe();
  // }, []);
// Assuming you have Firebase initialized and the user is logged in
// const currentUser = firebase.auth().currentUser;

// if (currentUser) {
//   const uid = currentUser.uid;
  // Get the document reference based on the user's UID
//   const userDocRef = firestore().collection('users').doc('F361cvnIj8f5gwy1Rf5B');

//   // Retrieve the document using the user's UID
//   userDocRef.get().then((doc) => {
//     if (doc.exists) {
//       // Get the document ID
//       const docId = doc.id;

//       // Get the data fields of the document
//       const userData = doc.data();
//       console.log('Document ID:', docId);
//       console.log('User Data:', userData)
//       console.log(uid);
//     } else {
//       console.log('No such document!');
//     }
//   }).catch((error) => {
//     console.error('Error getting document:', error);
//   });
// }
  return (
    <SafeAreaView style={styles.cont}>
      <ImageBackground source={require('./gym.jpeg')} style={styles.img}>
          <Text style={styles.text}>BrawnBlitz</Text>
          <Text style={styles.text2}>Your Personal Trainer.</Text>
          <TouchableOpacity style={styles.card1}>
            <Text style={styles.text1}>Your recommended workout based on your body measures is HIIT.Your AI coach has recommended these exercises.</Text>
          </TouchableOpacity>
          <View style={styles.row}>
            <TouchableOpacity style={styles.card2}>
              <Text style={styles.text1}>Burpees</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card3}>
              <Text style={styles.text1}>Jump Squats</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card4}>
              <Text style={styles.text1}>Mountain Climbers</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.card5}>
              <Text style={styles.text1}>High Knees</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card6}>
              <Text style={styles.text1}>Sprints</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card7}>
              <Text style={styles.text1}>Jumping Lungees</Text>
            </TouchableOpacity>
          </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default Mainpage

const styles = StyleSheet.create({
    cont:{
      flex:1,
      justifyContent:'center',
      backgroundColor:'white',
    },
    row:{
      flex:1,
      flexDirection:'row'
    },
    card1:{
      backgroundColor:'#EDD187',
      alignSelf:'center',
      marginBottom:10,
      height:160,
      width:360,
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