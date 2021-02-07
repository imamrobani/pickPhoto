import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, LayoutAnimation, NativeModules } from 'react-native'
import { Dummy5 } from '../../assets'
import { Colors, Fonts } from '../../const'
import { Scale } from '../../utils'

const ItemListImage = ({ image = Dummy5, latitude, longitude, time }) => {
  const { UIManager } = NativeModules
  UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true)

  const [height, setHeight] = useState(100)
  const [width, setWidth] = useState(100)
  const [flexDirection, setFlexdirection] = useState('row')
  const [isExpand, setIsExpand] = useState(false)

  const onDetail = () => {

    if (isExpand) {
      LayoutAnimation.spring();
      setHeight(100)
      setWidth(100)
      setFlexdirection('row')
    } else {
      LayoutAnimation.spring();
      setHeight(270)
      setWidth(270)
      setFlexdirection('column')
    }
    setIsExpand(!isExpand)
  }

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onDetail}>
      <View style={[styles.container, { flexDirection }]}>
        <Image
          source={image}
          style={[styles.image, { height, width }]}
        />
        <View style={styles.content}>
          <Text style={styles.title}>Latittude: {latitude}</Text>
          <Text style={styles.title}>Longitude: {longitude}</Text>
          <Text style={styles.title}>Time: {time}</Text>
          <View style={styles.line} />
        </View>
      </View>
    </TouchableOpacity>
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
    color: Colors.dark,
    fontSize: Scale(12),
    textAlign: 'center'
  },
  line: {
    backgroundColor: '#d8d8d8',
    height: 3,
    marginTop: 16,
    width: 30,
    alignSelf: 'center',
    borderRadius: 30 / 2
  }
})
