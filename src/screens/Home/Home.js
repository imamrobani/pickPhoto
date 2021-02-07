import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { ButtonCamera, HomeProfile, ImageCard } from '../../components'
import useHome from '../../hooks/useHome'
import firebase from 'react-native-firebase'
import useFcm from '../../hooks/useFcm'

const Home = ({ navigation }) => {
  const [addPhoto, lastImage] = useHome()
  useFcm()

  return (
    <View style={{ flex: 1 }}>
      <HomeProfile />
      <View style={styles.cardContainer}>
        <ImageCard
          image={{ uri: lastImage.file }}
          latitude={lastImage.latitude}
          longitude={lastImage.longitude}
          onPress={() => navigation.navigate('ListPhoto')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <ButtonCamera onPress={addPhoto} />
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
