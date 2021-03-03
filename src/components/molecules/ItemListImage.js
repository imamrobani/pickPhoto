import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, LayoutAnimation, NativeModules } from 'react-native'
import { SharedElement } from 'react-navigation-shared-element'
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
  const navigation = useNavigation()

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
    <View style={[styles.container, { flexDirection }]}>
      <TouchableOpacity onPress={() => navigation.navigate('DetailPhoto', { image, time })}>
        <SharedElement id={`item.${time}.image`}>
          <Image
            source={image}
            style={[styles.image, { height, width }]}
          />
        </SharedElement>
      </TouchableOpacity>
      <View style={styles.content}>
        <Text style={styles.title}>Latittude: {latitude}</Text>
        <Text style={styles.title}>Longitude: {longitude}</Text>
        <SharedElement id={`item.${image}.time`}>
          <Text style={styles.title}>Time: {time}</Text>
        </SharedElement>
        <TouchableOpacity activeOpacity={0.7} onPress={onDetail}>
          <View style={styles.line} />
        </TouchableOpacity>
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
