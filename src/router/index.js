import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home, ListPhoto, Profile, SplashScreen } from '../screens'
import { BottomNavigator } from '../components'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const options = {
  gestureEnabled: true,
  ...TransitionPresets.ScaleFromCenterAndroid
}

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
        // cardStyle: {
        //   backgroundColor: 'white'
        // }
      }}
    >
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="MainApp" component={MainApp} options={options} />
      <Stack.Screen name="ListPhoto" component={ListPhoto} options={options} />
    </Stack.Navigator>
  )
}

export default Router