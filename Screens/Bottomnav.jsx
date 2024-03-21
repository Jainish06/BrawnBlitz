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
        <Tab.Navigator
        >
            <Tab.Screen options={{
                headerShown: false,
                tabBarLabelStyle: {fontSize: 16}}} name="Home" component={Mainpage} />
            <Tab.Screen options={{
                headerShown: false,
                tabBarLabelStyle: {fontSize: 16}}} name="Discover" component={Discover} />
            <Tab.Screen options={{
                headerShown: false,
                tabBarLabelStyle: {fontSize: 16}}} name="Report" component={Report} />
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