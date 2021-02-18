import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IcNext } from '../../assets'
import { Colors, Fonts } from '../../const'

const ItemListMenu = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
        <IcNext />
      </View>
    </TouchableOpacity>
  )
}

export default ItemListMenu

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 7
  },
  text: {
    fontFamily: Fonts.POPPINS_REGULAR,
    color: Colors.black
  }
})
