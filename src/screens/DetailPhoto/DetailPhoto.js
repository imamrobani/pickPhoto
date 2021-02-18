import React from 'react'
import { Image, StyleSheet, Text, View, SafeAreaView, Dimensions, ScrollView } from 'react-native'
import { SharedElement } from 'react-navigation-shared-element'
import { ButtonList } from '../../components'
import * as Animatable from 'react-native-animatable'
const AnimatableScrollView = Animatable.createAnimatableComponent(ScrollView)

const animation = {
  0: { opacity: 0, translateX: 50 },
  1: { opacity: 1, translateX: 0 }
}

const { height, width } = Dimensions.get("window");
const SPACING = 12

const colors = [
  '#333853',
  '#A78212',
  'tomato',
  '#1A5B49',
  'gold',
  '#090F0B',
  '#Ac2B01',
  '#6A472E',
  '#0099CC',
]

const buttons = ['Get more custom', 'More items']

const DetailPhoto = ({ route }) => {
  const { image, time } = route.params
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <SharedElement id={`item.${image}.image`}>
        <Image
          source={image}
          style={styles.image}
        />
      </SharedElement>
      <View style={styles.meta}>
        {/* <SharedElement id={`item.${time}.time`}>
          <Text style={styles.model}>Time:{time} </Text>
        </SharedElement> */}
        {/* <Text style={styles.description}>Latittude: </Text>
        <Text style={styles.description}>Longitude: </Text> */}
      </View>
      <AnimatableScrollView
        useNativeDriver
        animation={animation}
        delay={300}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ flexGrow: 0 }}
        contentContainerStyle={{ padding: SPACING }}>
        {colors.map(color => {
          return (
            <View
              key={color}
              style={styles.switch(color)}
            />
          )
        })}
      </AnimatableScrollView>
      <View style={{ padding: SPACING }}>
        {buttons.map((text, index) => {
          return (
            <Animatable.View
              key={index}
              useNativeDriver
              animation={animation}
              delay={300 + (index + 1) * 100}
            >
              <ButtonList key={index} text={text} />
            </Animatable.View>
          )
        })}
      </View>
    </SafeAreaView>
  )
}


export default DetailPhoto

const styles = StyleSheet.create({
  image: {
    width: width,
    height: width,
    resizeMode: 'contain'
  },
  switch: (color) => ({
    width: 56,
    height: 56,
    backgroundColor: color,
    borderRadius: 16,
    marginRight: SPACING
  }),
  meta: {
    position: 'absolute',
    top: SPACING * 4,
    left: SPACING,
    width: width * 0.6
  },
  model: {
    fontSize: 18,
    fontWeight: '700'
  },
  description: {
    fontSize: 12,
    opacity: 0.7
  }
})
