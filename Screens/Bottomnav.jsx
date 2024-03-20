import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Discover from './Discover';
import Report from './Report';
import Mainpage from './Mainpage';

const Tab = createBottomTabNavigator();

const Bottomnav = () => {
  return (
    <MyTabs style={styles.btmnav}></MyTabs>
  )
}

function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Mainpage} />
            <Tab.Screen name="Discover" component={Discover} />
            <Tab.Screen name="Report" component={Report} />
        </Tab.Navigator>
    );
  }

export default Bottomnav

const styles = StyleSheet.create({})