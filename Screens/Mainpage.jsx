import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, ScrollView, Linking} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState, useEffect } from 'react'
import database from '@react-native-firebase/database';
import firestore from '@react-native-firebase/firestore';
import { firebase } from '@react-native-firebase/auth';
import { Bmi, act_level, Goal } from './Detailspage';

var type
var intensity
var freq
const ST = ['Squats', 'Lunges', 'Push-ups', 'Pull-ups', 'Bench-press', 'Jumping Jacks']
const HIIT = ['Burpees', 'Jump Squats', 'Mountain Climbers', 'High Knees', 'Sprints', 'Jumping Lunges']
const Yoga = ['Surya Namaskar', 'Virbhadrasana', 'Trikonasana', 'Bhujangasana', 'Matsyasana', 'Shavasana']
const Cardio = ['Running', 'Cycling', 'Jump rope', 'Rowing', 'Circuit Training', 'Kick-Boxing']
var type_ind = []

const Mainpage = () => {

  if(Bmi<18.5){
    type = 'Strength training'
    intensity = 'High'
    freq = 'Daily or at least 5 times a week.'
    type_ind = ST
  }
  else if(Bmi>=18.5 && Bmi<=25){
    type = 'HIIT and Yoga'
    intensity = 'Medium'
    freq = 'At least 3 times a week.'
    type_ind = HIIT
  }
  else if(Bmi>25 && Bmi<=30){
    type = 'Yoga and Cardio'
    intensity = 'high'
    freq = 'Daily'
    type_ind = Cardio
  }
  else if(Bmi>30){
    type = 'Cardio'
    intensity = 'Medium'
    freq = 'Daily'
    type_ind = Cardio
  }

  const handlePress1 = () => {
    if(type_ind[0]=='Squats'){
      Linking.openURL('https://youtu.be/U3HlEF_E9fo?si=ZlMMswx2rsxqeg_E');
    }
    else if(type_ind[0]=='Burpees'){
      Linking.openURL('https://youtu.be/auBLPXO8Fww?si=ekIOAx4EHgprzywA');
    }
    else if(type_ind[0]=='Running'){
      Linking.openURL('https://youtu.be/VOJcJHX9VpU?si=AOrqGV-DZ9MzhlsM');
    }
  };
  const handlePress2 = () => {
    if(type_ind[1]=='Lunges'){
      Linking.openURL('https://youtu.be/wrwwXE_x-pQ?si=uruDdLpNxQkzRY5L');
    }
    else if(type_ind[1]=='Jump Squats'){
      Linking.openURL('https://youtu.be/eUl1Ttx8b98?si=z3wDDKDbDMHBAvxB');
    }
    else if(type_ind[1]=='Cycling'){
      Linking.openURL('https://youtu.be/S0nRkf5wU5U?si=DJhrv_JgBlBWOYS-');
    }
  };
  const handlePress3 = () => {
    if(type_ind[2]=='Push-ups'){
      Linking.openURL('https://youtu.be/IODxDxX7oi4?si=rkOWqCdN9Fyqhi_N');
    }
    else if(type_ind[2]=='Mountain Climbers'){
      Linking.openURL('https://youtu.be/T_BvreyYL0w?si=C2sHe1IOa-aS8awu');
    }
    else if(type_ind[2]=='Jump rope'){
      Linking.openURL('https://youtu.be/kDOGb9C5kp0?si=vWlgU2WHQyQCqHwV');
    }
  };
  const handlePress4 = () => {
    if(type_ind[3]=='Pull-ups'){
      Linking.openURL('https://youtu.be/eGo4IYlbE5g?si=ZcdFm91xTxIxFEcz');
    }
    else if(type_ind[3]=='High Knees'){
      Linking.openURL('https://youtu.be/fLqrMzzU75o?si=INtc0wUOdd9anlaa');
    }
    else if(type_ind[3]=='Rowing'){
      Linking.openURL('https://youtu.be/ZN0J6qKCIrI?si=tWjLA7j7HRzQyPWQ');
    }
  };
  const handlePress5 = () => {
    if(type_ind[4]=='Bench-press'){
      Linking.openURL('https://youtu.be/4Y2ZdHCOXok?si=wLJxssPHVDpwn7Jk');
    }
    else if(type_ind[4]=='Sprints'){
      Linking.openURL('https://youtu.be/-Ot-dP1xST4?si=7ugskzC6kFZAITq3');
    }
    else if(type_ind[4]=='Circuit Training'){
      Linking.openURL('https://youtu.be/FPHApwn785o?si=YtM3j4vTruUb4Une');
    }
  };
  const handlePress6 = () => {
    if(type_ind[5]=='Jumping Jacks'){
      Linking.openURL('https://youtu.be/iSSAk4XCsRA?si=HyHOUcYoJ72if4pq');
    }
    else if(type_ind[5]=='Jumping Lunges'){
      Linking.openURL('https://youtu.be/hTdcOG9muQk?si=sZYT31jnCcrR3Plv');
    }
    else if(type_ind[5]=='Kick-Boxing'){
      Linking.openURL('https://youtu.be/M3330xDmcN0?si=qgNcZ6vYn9Zc2V-Q');
    }
  };
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
      <ScrollView>
        <ImageBackground source={require('./gym7.jpeg')} style={styles.img}>
          <Text style={styles.text}>BrawnBlitz</Text>
          <Text style={styles.text2}>Your Personal Trainer</Text>
          <View style={styles.column}>
            <View style={styles.card1}>
              <Text style={styles.text1}>Recommended workout type : {type}</Text>
            </View>
            <View style={styles.card1}>
              <Text style={styles.text1}>Workout intensity : {intensity}</Text>
            </View>
            <View style={styles.card1}>
              <Text style={styles.text1}>Frequency : {freq}</Text>
            </View>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.card2} onPress={handlePress1}>
              <Text style={styles.text1}>{type_ind[0]}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card3} onPress={handlePress2}>
              <Text style={styles.text1}>{type_ind[1]}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card4} onPress={handlePress3}>
              <Text style={styles.text1}>{type_ind[2]}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.card5} onPress={handlePress4}>
              <Text style={styles.text1}>{type_ind[3]}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card6} onPress={handlePress5}>
              <Text style={styles.text1}>{type_ind[4]}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card7} onPress={handlePress6}>
              <Text style={styles.text1}>{type_ind[5]}</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </ScrollView>
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
    column:{
      flex:1,
      flexDirection:'column'
    },
    card1:{
      backgroundColor:'#EDD187',
      alignSelf:'center',
      marginBottom:10,
      height:70,
      width:370,
      borderRadius:20,
      elevation:20,
    },
    card2:{
      backgroundColor:'#EAE1C2',
      marginLeft:20,
      marginTop:70,
      height:110,
      width:110,
      borderRadius:20,
      padding:3,
      elevation:20
    },
    card3:{
      backgroundColor:'#EAE1C2',
      marginLeft:15,
      marginTop:70,
      height:110,
      width:110,
      borderRadius:20,
      padding:3,
      elevation:20
    },
    card4:{
      backgroundColor:'#EAE1C2',
      marginLeft:15,
      marginTop:70,
      height:110,
      width:110,
      borderRadius:20,
      padding:3,
      elevation:20
    },
    card5:{
      backgroundColor:'#EAE1C2',
      marginLeft:15,
      height:110,
      width:110,
      borderRadius:20,
      padding:3,
      elevation:20
    },
    card6:{
      backgroundColor:'#EAE1C2',
      marginLeft:15,
      height:110,
      width:110,
      borderRadius:20,
      padding:3,
      elevation:20
    },
    card7:{
      backgroundColor:'#EAE1C2',
      marginLeft:15,
      height:110,
      width:110,
      borderRadius:20,
      padding:3,
      elevation:20
    },
    text:{
      textAlign: 'center',
      color: 'white',
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
      fontSize: 17,
      fontFamily: 'Montserrat-SemiBold',
      marginTop:20,
      marginBottom:10
    },
    text2:{
      textAlign: 'center',
      color: 'white',
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