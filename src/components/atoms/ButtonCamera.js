import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { IcCamera } from '../../assets'
import { Colors } from '../../const'

const ButtonCamera = ({ onPress }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.buttonCard}>
        <IcCamera width={30} height={30} />
      </View>
    </TouchableOpacity>
  )
}

export default ButtonCamera

const styles = StyleSheet.create({
  buttonCard: {
    width: 55,
    height: 55,
    borderRadius: 55 / 2,
    backgroundColor: Colors.marigold,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10
  }
})
