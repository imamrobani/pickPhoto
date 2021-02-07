import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Logo } from '../../assets'
import { Colors, Fonts } from '../../const'
import firebase from 'react-native-firebase'
import { showMessage, storeData } from '../../utils'

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    checkPermission()
    setTimeout(() => {
      navigation.reset({ index: 0, routes: [{ name: 'MainApp' }] })
    }, 2500);
  }, [])

  const checkPermission = async () => {
    const enabled = await firebase.messaging().hasPermission()
    if (enabled) {
      getFcmToken()
    } else {
      console.log('error ', enabled)
    }
  }

  const getFcmToken = async () => {
    const fcmToken = await firebase.messaging().getToken()
    if (fcmToken) {
      // console.log('fcmToken : ', fcmToken)
      storeData('fcm_token', { value: fcmToken })
    } else {
      showMessage('Gagal mendapatkan fcm token')
    }
  }

  return (
    <View style={styles.container}>
      <Logo />
      <View style={{ height: 38 }} />
      <Text style={styles.title}>pickPhotos</Text>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.topaz,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: { fontSize: 32, color: Colors.dark, fontFamily: Fonts.POPPINS_MEDIUM }
})
