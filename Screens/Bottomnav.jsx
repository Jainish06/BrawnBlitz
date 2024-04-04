import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Discover from './Discover';
import Report from './Report';
import Mainpage from './Mainpage';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const Bottomnav = () => {
  return (
    <MyTabs style={styles.btmnav}></MyTabs>
  )
}

function MyTabs() {
    return (
        <Tab.Navigator
        screenOptions={({route}) => ({
            // tabBarIcon: ({focused, color}) => {
            //   let iconName;
            //   if (route.name === 'Home') {
            //     iconName = focused ? 'home' : 'home-outline';
            //   } else if (route.name === 'Discover') {
            //     iconName = focused ? 'diamond' : 'diamond-outline';
            //   } else if (route.name === 'Report') {
            //     iconName = focused ? 'analytics' : 'analytics-outline';
            //   }
            //   return <Ionicons name={iconName} size={20} color={color} />;
            // },
            tabBarActiveTintColor:'blue',
            tabBarInactiveTintColor: 'white',
            gestureEnabled: true,
            swipeEnabled: true,
            tabBarStyle: {
              height: 51,
              backgroundColor:'black',
              padding:10,
            },
            tabBarLabelStyle: {
              fontFamily: 'Times-NewRoman',
            },
          })}>
            <Tab.Screen options={{
                headerShown: false,
                tabBarLabelStyle: {fontSize: 15}}} name="Home" component={Mainpage}/>
            <Tab.Screen options={{
                headerShown: false,
                tabBarLabelStyle: {fontSize: 15}}} name="Discover" component={Discover} />
            <Tab.Screen options={{
                headerShown: false,
                tabBarLabelStyle: {fontSize: 15}}} name="Report" component={Report} />
        </Tab.Navigator>
    );
  }

export default Bottomnav

const styles = StyleSheet.create({
    btmnav:{
        fontSize:20,
        backgroundColor:'black'
    }
})