import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import { Colors, Fonts } from '../../const'

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size='large' color={Colors.topaz} />
      <Text style={styles.text}>Loading...</Text>
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontFamily: Fonts.POPPINS_REGULAR,
    marginTop: 12,
    color: Colors.darkTwo
  }
})
