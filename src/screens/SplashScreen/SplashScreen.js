import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Logo } from '../../assets';
import { Colors } from '../../const';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.reset({ index: 0, routes: [{ name: 'MainApp' }] })
    }, 2000);
  }, [])
  return (
    <View style={styles.container}>
      <Logo />
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.seafoamBlue,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
