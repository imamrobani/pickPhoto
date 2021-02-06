import React from 'react'
import { StyleSheet, View } from 'react-native'
import { ButtonCamera, HomeProfile, ImageCard } from '../../components'

const Home = () => {
  return (
    <View style={{ flex: 1 }}>
      <HomeProfile />
      <View style={styles.cardContainer}>
        <ImageCard
          latitude='-6.89868'
          longitude='107.64278'
        />
      </View>
      <View style={styles.buttonContainer}>
        <ButtonCamera />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 24
  },
  buttonContainer: {
    marginVertical: 16,
    alignItems: 'center'
  },
})

export default Home
