import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Directory from '../components/DirectoryComponent';
import Home from '../components/HomeComponent';
import Main from '../components/MainComponent';
import SchoolInfo from '../components/SchoolInfoComponent';

import A from '../components/A';
import B from '../components/B';
import C from '../components/C';
import D from '../components/D';

const DirectoryStack = createStackNavigator();

function DirectoryStackScreen() {
  return (
    <DirectoryStack.Navigator
      initialRouteName="Directory"
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'tomato' },
      }}>
      <DirectoryStack.Screen name="Directory" component={Directory} />
      
    </DirectoryStack.Navigator>
  );
}

const AStack = createStackNavigator();

function AStackScreen() {
  return (
    <AStack.Navigator>
      <AStack.Screen name="A" component={A} />
      <AStack.Screen name="B" component={B} />
    </AStack.Navigator>
  );
}

const CStack = createStackNavigator();

function CStackScreen() {
  return (
    <CStack.Navigator>
      <CStack.Screen name="C" component={C} />
      <CStack.Screen name="D" component={D} />
    </CStack.Navigator>
  );
}

const Tab2 = createBottomTabNavigator();

function MyTabs2() {
  return (
     <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'A') {
              iconName = focused ? 'ios-home' : 'ios-home';
            } else if (route.name === 'B') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            } else if (route.name === 'C') {
              iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#0c7b93',
          inactiveTintColor: 'gray',
          activeBackgroundColor: '#fff',
          inactiveBackgroundColor: '#fff',
        }}
      >
        <Tab.Screen name="AStack" component={AStackScreen} />
        <Tab.Screen name="CStack" component={CStackScreen} />
        
      </Tab.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'ios-home' : 'ios-home';
            } else if (route.name === 'Directory') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            } else if (route.name === 'DirectoryStack') {
              iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#0c7b93',
          inactiveTintColor: 'gray',
          activeBackgroundColor: '#fff',
          inactiveBackgroundColor: '#fff',
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Directory" component={DirectoryStackScreen} />
      </Tab.Navigator>
  )
};

export default MyTabs2;