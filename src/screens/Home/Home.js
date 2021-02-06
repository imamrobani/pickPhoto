import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { HomeProfile, ImageCard } from '../../components'
import { Colors } from '../../const'

const Home = () => {
  return (
    <View style={{ flex: 1 }}>
      <HomeProfile />
      <View style={styles.imageContainer}>
        <ImageCard
          latitude='-6.89868'
          longitude='107.64278'
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 24
  }
})

export default Home
