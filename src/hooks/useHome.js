import { useState, useEffect } from 'react'
import { PermissionsAndroid } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Geolocation from '@react-native-community/geolocation'
import { launchCamera } from 'react-native-image-picker'
import { getListPhotos } from '../redux/action/listPhoto'
import { getData, showMessage } from '../utils'
import { uploadPhoto } from '../redux/action/home'

export default () => {
  const [fcm, setFcm] = useState('')
  const [position, setPosition] = useState({
    latitude: '',
    longitude: ''
  })
  const { lastImage } = useSelector(state => state.listPhotoReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    getData('fcm_token').then(resFcm => {
      // console.log('dasdadsa :', resFcm.value)
      setFcm(resFcm.value)
    })
    dispatch(getListPhotos())
    requestLocationPermission()

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
        callLocation()
        watchID()
      } else {
        showMessage('Location permission denied')
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const callLocation = () => {
    Geolocation.getCurrentPosition(position => {
      const currentLongitude = JSON.stringify(position.coords.longitude)
      const currentLatitude = JSON.stringify(position.coords.latitude)
      // console.log('currentLatitude: ', currentLatitude)
      // console.log('currentLongitude: ', currentLongitude)
      setPosition({
        latitude: currentLatitude,
        longitude: currentLongitude
      })
    },
      error => console.log('errorCurrent: ', error.message),
      { enableHighAccuracy: false, timeout: 20000 }
    );
  }

  const watchID = () => {
    Geolocation.watchPosition(position => {
      const currentLongitude = JSON.stringify(position.coords.longitude)
      const currentLatitude = JSON.stringify(position.coords.latitude)
      setPosition({
        latitude: currentLatitude,
        longitude: currentLongitude
      })
    },
      error => console.log('errorWatch: ', error.message)
    )
  }

  const addPhoto = () => {
    callLocation()
    launchCamera({
      quality: 1,
      maxWidth: 640,
      maxHeight: 480
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
        formData.append('fcm_token', fcm)

        // console.log('form: ', formData)
        dispatch(uploadPhoto(formData))
      }
    })
  }

  return [addPhoto, lastImage]
}