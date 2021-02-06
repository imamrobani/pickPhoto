import React from 'react'
import { View, Text } from 'react-native'
import { HomeProfile } from '../../components'

const Home = () => {
  return (
    <View style={{ flex: 1 }}>
      <HomeProfile />
      <Text>Home Screen</Text>
    </View>
  )
}

export default Home
