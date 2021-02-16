import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { DetailPhoto, Home, ListPhoto, Profile, SplashScreen } from '../screens'
import { BottomNavigator } from '../components'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element'

// const Stack = createStackNavigator()
const Stack = createSharedElementStackNavigator()
const Tab = createBottomTabNavigator()

const options = {
  gestureEnabled: true,
  ...TransitionPresets.ScaleFromCenterAndroid
}

const optionsiOS = {
  gestureEnabled: true,
  ...TransitionPresets.SlideFromRightIOS
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
      <Stack.Screen name="MainApp" component={MainApp} options={optionsiOS} />
      <Stack.Screen name="ListPhoto" component={ListPhoto} options={options} />
      <Stack.Screen
        name="DetailPhoto"
        component={DetailPhoto}
        sharedElements={(route, otherRoute, showing) => {
          const { image } = route.params
          return [
            { id: `item.${image}.image`, animation: 'fade-in' },
          ]
        }}
      />
    </Stack.Navigator>
  )
}

export default Router