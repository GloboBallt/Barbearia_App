import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './screens/Home';
import Login from './screens/Login';
import Lista from './screens/Lista';
import Settings from './screens/Settings'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator> */}
      <Tab.Navigator screenOptions={({ route } ) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-home'
              : 'ios-home-outline';
          } else if (route.name === 'Login') {
            iconName = focused
              ? 'ios-log-out'
              : 'ios-log-out-outline';
          } else if (route.name === 'Lista') {
            iconName = focused
              ? 'ios-list'
              : 'ios-list-outline';
          }
          else if (route.name === 'Config') {
            iconName = focused
              ? 'ios-settings'
              : 'ios-settings-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#6fbbd3',
        tabBarInactiveTintColor: 'gray',
      })}
        initialRouteName='Login'>
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Lista" component={Lista} />
        <Tab.Screen name="Config" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 125,
    height: 30,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
  },
  inputContainer: {
    flex: 0.75,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontWeight: 'bold',
  },
  titleContainer: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
