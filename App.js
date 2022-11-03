import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './screens/Home';
import Login from './screens/Login';
import Lista from './screens/Lista';
import Settings from './screens/Settings'
import Cadastro from './screens/Cadastro'

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route } ) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-home'
              : 'ios-home-outline';
          } else if (route.name === 'Sair') {
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
          else if (route.name === 'Cadastro') {
            
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#6fbbd3',
        tabBarInactiveTintColor: 'gray',
      })}
        initialRouteName='Sair'>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Lista" component={Lista} />
        <Tab.Screen name="Config" component={Settings} />
        <Tab.Screen name="Sair" component={Login} options={{ tabBarStyle: {display: 'none'}} }/>
        <Tab.Screen name="Cadastro" component={Cadastro} options={{ tabBarStyle: {display: 'none'}, lazy: false }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
