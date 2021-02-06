import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Dummy5 } from '../../assets'
import { Colors, Fonts } from '../../const'

const ItemListImage = () => {
  return (
    <View style={styles.container}>
      <Image
        source={Dummy5}
        style={styles.image}
      />
      <View style={styles.content}>
        <Text style={styles.title}>Latittude: -6.89868</Text>
        <Text style={styles.title}>Longitude: 107.64278</Text>
      </View>
    </View>
  )
}

export default ItemListImage

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    padding: 16,
    marginHorizontal: 24,
    marginVertical: 16

  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    overflow: 'hidden',
    marginRight: 12
  },
  content: { flex: 1 },
  title: {
    fontFamily: Fonts.POPPINS_REGULAR,
    color: Colors.dark
  },
})
