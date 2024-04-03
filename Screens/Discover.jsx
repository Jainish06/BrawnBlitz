import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, ScrollView, Image, Linking } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Discover = () => {

  const handlePress1 = () => {
    Linking.openURL('https://www.anytimefitness.co.in/ideal-sequence-for-a-full-body-workout/');
  };
  const handlePress2 = () => {
    Linking.openURL('https://www.anytimefitness.co.in/weight-loss-programs-that-really-work/');
  };
  const handlePress3 = () => {
    Linking.openURL('https://www.anytimefitness.co.in/muscle-building-exercises-for-beginners/');
  };
  const handlePress4 = () => {
    Linking.openURL('https://www.anytimefitness.co.in/intermittent-fasting-for-weight-loss/');
  };
  const handlePress5 = () => {
    Linking.openURL('https://nutritionstripped.com/high-protein-healthy-buckeyes/');
  };
  const handlePress6 = () => {
    Linking.openURL('https://nutritionstripped.com/mindful-eating-for-emotional-wellness-how-to-use-mindfulness-to-cope-with-stress-anxiety-and-other-emotions/');
  };
  const handlePress7 = () => {
    Linking.openURL('https://www.anytimefitness.co.in/how-much-protein-is-required-to-eat-per-day-for-muscle-building/');
  };
  const handlePress8 = () => {
    Linking.openURL('https://youtu.be/IODxDxX7oi4?si=rkOWqCdN9Fyqhi_N');
  };

  return (
    <SafeAreaView style={styles.cont}>
      <ScrollView>
        <ImageBackground source={require('./gym7.jpeg')} style={styles.img}>
          <Text style={styles.text}>BrawnBlitz</Text>
          <Text style={styles.text2}>Your Personal Trainer</Text>
          <ScrollView horizontal={true} style={styles.cont1}>
            <TouchableOpacity style={styles.card1} onPress={handlePress1}>
              <Image source={require('./fullbod.jpeg')} style={styles.image} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.card1} onPress={handlePress2}>
              <Image source={require('./loseweight.jpeg')} style={styles.image} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.card1} onPress={handlePress3}>
              <Image source={require('./top.jpeg')} style={styles.image} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.card1} onPress={handlePress4}>
              <Image source={require('./types.jpeg')} style={styles.image} />
            </TouchableOpacity>
          </ScrollView>
          <Text style={styles.text2}>Most popular stories.</Text>
          <ScrollView>
            <TouchableOpacity style={styles.card2} onPress={handlePress5}>
              <Image source={require('./vegan.jpeg')} style={styles.image2}/>
            </TouchableOpacity>
            <Text style={styles.text1}>Protein-Packed Vegan Buckeyes</Text>
            <TouchableOpacity style={styles.card2} onPress={handlePress6}>
              <Image source={require('./mind.jpeg')} style={styles.image2}/>
            </TouchableOpacity>
            <Text style={styles.text1}>Mindful Eating for Emotional Wellness</Text>
            <TouchableOpacity style={styles.card2} onPress={handlePress7}>
              <Image source={require('./protein.jpeg')} style={styles.image2}/>
            </TouchableOpacity>
            <Text style={styles.text1}>How Much Protein Are You Required To Eat Per Day For Muscle Building?</Text>
            <TouchableOpacity style={styles.card2} onPress={handlePress8}>
              <Image source={require('./mind.jpeg')} style={styles.image2}/>
            </TouchableOpacity>
            <Text style={styles.text1}>Protein-Packed Vegan Buckeyes</Text>
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
  image:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center',
    height:150,
    width:200,
    padding:20,
    borderRadius:20,
  },
  image2:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center',
    height:150,
    width:270,
    padding:20,
    borderRadius:20,
  },
  card1:{
    flex:1,
    backgroundColor:'#EDD187',
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center',
    marginBottom:10,
    height:150,
    width:200,
    margin:8,
    borderRadius:20,
    elevation:20,
  },
  card2:{
    flex:1,
    backgroundColor:'#EDD187',
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center',
    height:100,
    width:270,
    margin:8,
    borderRadius:20,
    elevation:20,
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
    textAlign:'center',
    color: 'white',
    fontWeight:'bold',
    fontSize: 20,
    fontFamily: 'Montserrat-SemiBold',
    marginBottom:3
  },
  text2:{
    textAlign: 'center',
    color: 'white',
    fontWeight:'bold',
    fontSize: 22,
    fontFamily: 'Montserrat-SemiBold',
    marginTop:1,
  },
  img:{
    height:710
  },
})