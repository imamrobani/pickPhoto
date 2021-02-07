import Geolocation from '@react-native-community/geolocation'
import React, { useEffect, useState } from 'react'
import { PermissionsAndroid, StyleSheet, View } from 'react-native'
import { launchCamera } from 'react-native-image-picker'
import { useDispatch } from 'react-redux'
import { ButtonCamera, HomeProfile, ImageCard } from '../../components'
import { uploadPhoto } from '../../redux/action/home'
import { showMessage } from '../../utils'

const Home = ({ navigation }) => {
  const [position, setPosition] = useState({
    latitude: '',
    longitude: ''
  })
  const dispatch = useDispatch()

  useEffect(() => {
    requestLocationPermission()
  }, [])

  useEffect(() => {
    Geolocation.getCurrentPosition(position => {
      const currentLongitude = JSON.stringify(position.coords.longitude)
      const currentLatitude = JSON.stringify(position.coords.latitude)
      setPosition({
        latitude: currentLatitude,
        longitude: currentLongitude
      })
    },
      error => console.log('errorCurrent: ', error.message),
      { enableHighAccuracy: false, timeout: 20000 }
    );

    const watchID = Geolocation.watchPosition(position => {
      const currentLongitude = JSON.stringify(position.coords.longitude)
      const currentLatitude = JSON.stringify(position.coords.latitude)
      setPosition({
        latitude: currentLatitude,
        longitude: currentLongitude
      })
    },
      error => console.log('errorWatch: ', error.message)
    )

    return () => Geolocation.clearWatch(watchID)
  }, [])

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Access Required',
          message: 'This App needs to Access your location',
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        showMessage('You can use location', 'success')
      } else {
        showMessage('Location permission denied')
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const addPhoto = () => {
    launchCamera({
      quality: 0.5,
      maxWidth: 200,
      maxHeight: 200
    }, res => {
      // console.log('res: ', res)
      if (res.didCancel || res.errorCode) {
        showMessage('Anda tidak memilih foto')
      } else {
        const dataImage = {
          uri: res.uri,
          type: res.type,
          name: res.fileName
        }

        let formData = new FormData()
        formData.append('file', dataImage)
        formData.append('latitude', position.latitude)
        formData.append('longitude', position.longitude)
        formData.append('fcm_token', '')

        dispatch(uploadPhoto(formData))
      }
    })
  }

  return (
    <View style={{ flex: 1 }}>
      <HomeProfile />
      <View style={styles.cardContainer}>
        <ImageCard
          latitude='-6.89868'
          longitude='107.64278'
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
