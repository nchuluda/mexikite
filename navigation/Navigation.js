import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';



import About from '../components/AboutComponent';
import Directory from '../components/DirectoryComponent';
import Home from '../components/HomeComponent';
import Main from '../components/MainComponent';
import SchoolInfo from '../components/SchoolInfoComponent';

function LogoTitle() {
  return (
    
      <Image
      style={{ width: 120, height: 120, alignContent: 'center' }}
      source={require('../components/images/mexikite.png')}
    />
  );
}

const AboutStack = createStackNavigator();

function AboutStackScreen() {
  return (
    <AboutStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#142850' },
      }}>
      <AboutStack.Screen name="About" component={About} />
    </AboutStack.Navigator>
  );
}

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#142850'
         },
      }}>
      <HomeStack.Screen 
        name="MexiKite" 
        options={{ headerTitle: props => <LogoTitle {...props} />}}
        headerTitleStyle="center"
        component={Home} />

      <HomeStack.Screen name="SchoolInfo" component={SchoolInfo} />
    </HomeStack.Navigator>
  );
}

const DirectoryStack = createStackNavigator();

function DirectoryStackScreen() {
  return (
    <DirectoryStack.Navigator
      initialRouteName="Directory"
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#142850' },
      }}>
      <DirectoryStack.Screen name="Directory" component={Directory} />
      <DirectoryStack.Screen name="SchoolInfo" component={SchoolInfo} />
    </DirectoryStack.Navigator>
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
            } else if (route.name === 'About') {
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
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Directory" component={DirectoryStackScreen} />
        <Tab.Screen name="About" component={AboutStackScreen} />

      </Tab.Navigator>
  )
};

export default MyTabs;