import { StyleSheet, Text, View, Appearance, SafeAreaView, ScrollView, ImageBackground} from 'react-native'
import React from 'react'
import Homepage from './Screens/Homepage'
import { NavigationContainer } from '@react-navigation/native'
import { Screen } from 'react-native-screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Loginpage from './Screens/Loginpage'
import Signuppage from './Screens/Signuppage'
import Detailspage from './Screens/Detailspage'
import Bmipage from './Screens/Bmipage'
import Mainpage from './Screens/Mainpage'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Homepage' component={Homepage} />
        <Stack.Screen name='Loginpage' component={Loginpage} />
        <Stack.Screen name='Signuppage' component={Signuppage} />
        <Stack.Screen name='Detailspage' component={Detailspage} />
        <Stack.Screen name='Bmipage' component={Bmipage} />
        <Stack.Screen name='Mainpage' component={Mainpage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App