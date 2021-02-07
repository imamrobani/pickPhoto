import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Dummy5, IcNext } from '../../assets'
import { Colors, Fonts } from '../../const'
import { Scale } from '../../utils'

const ImageCard = ({ image = Dummy5, latitude, longitude, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
        <View style={styles.moreContainer}>
          <Text style={styles.textMore}>See more</Text>
          <IcNext width={27} height={27} />
        </View>
      </TouchableOpacity>
      <Image source={image} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.text}>Latitude: {latitude}</Text>
        <Text style={styles.text}>Longitude: {longitude}</Text>
      </View>
    </View>
  )
}

export default ImageCard

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.veryLightPink,
    borderRadius: 8,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 14,
    overflow: 'hidden'
  },

  image: {
    width: Scale(300),
    height: Scale(280),
    resizeMode: 'cover'
  },
  content: { padding: 12 },
  text: {
    fontSize: Scale(16),
    fontFamily: Fonts.POPPINS_REGULAR,
    color: 'black'
  },
  moreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginVertical: 4
  },
  textMore: {
    fontSize: Scale(15),
    fontFamily: Fonts.POPPINS_MEDIUM,
    color: Colors.dark
  }
})
