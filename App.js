import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Home from './components/HomeComponent';
import Main from './components/MainComponent';
import Directory from './components/DirectoryComponent';
import SchoolInfo from './components/SchoolInfoComponent';


function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require('./components/images/mexikite.png')}
    />
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
            } else if (route.name === 'Main') {
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
      <DirectoryStack.Screen name="SchoolInfo" compoonent={SchoolInfo} />
    </DirectoryStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    
    </NavigationContainer>
  );
}

