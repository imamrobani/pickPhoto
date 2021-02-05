import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home, Profile, SplashScreen } from '../screens'
import { BottomNavigator } from '../components'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='Profile' component={Profile} />
    </Tab.Navigator>
  )
}

const Router = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white'
        }
      }}
    >
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="MainApp" component={MainApp} />
    </Stack.Navigator>
  )
}

export default Router

