import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Logo } from '../../assets';
import { Colors, Fonts } from '../../const';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.reset({ index: 0, routes: [{ name: 'MainApp' }] })
    }, 2000);
  }, [])
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
