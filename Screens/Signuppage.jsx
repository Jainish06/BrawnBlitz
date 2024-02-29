import { StyleSheet, Text, View, SafeAreaView, loading, ToastAndroid, Keyboard, ActivityIndicator, TextInput, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { useNavigation} from '@react-navigation/native';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

function Signuppage() {

  GoogleSignin.configure({
    webClientId: '1083046700457-4534l36v1i1omvfoad2cq73ctqota3vg.apps.googleusercontent.com',
  });

  async function onGoogleButtonPress() {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();
  
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  
    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  const navigation = useNavigation();
  const [value, setValue] = useState({
    email: '',
    mobile: '',
  });

  return (
    <SafeAreaView style={styles.container}>
      {!loading && (
        <>
          <View style={styles.inputCont}>
            <Text style={styles.labelText}>Phone No.</Text>
            <TextInput
              value={value.mobile}
              onChangeText={text => setValue({...value, mobile: text})}
              style={styles.input}
            />
          </View>
          <TouchableOpacity
            style={styles.btnCont}
            activeOpacity={0.4}>
            <Text style={styles.btnText}>Create Account</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnCont}
            onPress ={() => onGoogleButtonPress().then(() => {console.log('Signed in with Google!'); ToastAndroid.show("Signed Up!",ToastAndroid.BOTTOM)})}>
            <Text style={styles.btnText}>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.4}
            onPress={() => navigation.navigate('Loginpage')}>
            <Text style={styles.alreadyText}>Already Have An Account?</Text>
          </TouchableOpacity>
        </>
      )}
      {loading && (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator
            size="large"
            color="#2563eb"
            style={{paddingHorizontal: 10, paddingVertical: 6}}
          />
        </View>
      )}
    </SafeAreaView>
  )
}

export default Signuppage

const styles = StyleSheet.create({
  text:{
    fontSize: 18,
    fontWeight: 'bold',
    alignContent:'center'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputCont: {
    width: '85%',
    marginBottom: 10,
  },
  input: {
    fontSize: 16,
    borderColor: '#9ca3af',
    borderWidth: 1.4,
    backgroundColor: '#F3F4F6',
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 10,
    color: '#000',
    fontFamily: 'Montserrat-Medium',
  },
  labelText: {
    marginBottom: 4,
    color: '#000',
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
  },
  btnCont: {
    backgroundColor: '#2563eb',
    width: '85%',
    paddingVertical: 12,
    borderRadius: 8,
    elevation: 14,
    shadowColor: '#2563eb',
    marginBottom:10
  },
  btnText: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 18,
    fontFamily: 'Montserrat-SemiBold',
  },
  alreadyText: {
    marginTop: 20,
    color: '#000',
    fontSize: 15,
    fontFamily: 'Montserrat-SemiBold',
  },
})