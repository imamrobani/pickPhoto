import React from 'react';
import { Animated, Dimensions, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import { Header, ItemListImage } from '../../components';

const { height } = Dimensions.get("window");

const SPACING = 20
const IMAGE_SIZE = 110
const ITEM_SIZE = IMAGE_SIZE + SPACING * 3

const ListPhoto = ({ navigation }) => {
  const { photos } = useSelector(state => state.listPhotoReducer)
  const scrollY = React.useRef(new Animated.Value(0)).current

  return (
    <View style={{ flex: 1 }}>
      <Header
        title='List Photos'
        subTitle='Enjoy with your photo'
        onBack={() => navigation.goBack()}
      />
      <Animated.FlatList
        data={photos}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        keyExtractor={(item, index) => item.id.toString()}
        renderItem={({ item, index }) => {

          const position = Animated.subtract(index * ITEM_SIZE, scrollY);
          const isDisappearing = -ITEM_SIZE;
          const isTop = 0;
          const isBottom = height - ITEM_SIZE;
          const isAppearing = height;
          const translateY = Animated.add(
            Animated.add(
              scrollY,
              scrollY.interpolate({
                inputRange: [0, 0.00001 + index * ITEM_SIZE],
                outputRange: [0, -index * ITEM_SIZE],
                extrapolateRight: "clamp",
              })
            ),
            position.interpolate({
              inputRange: [isBottom, isAppearing],
              outputRange: [0, -ITEM_SIZE / 4],
              extrapolate: "clamp",
            })
          );

          const scale = position.interpolate({
            inputRange: [isDisappearing, isTop, isBottom, isAppearing],
            outputRange: [0.5, 1, 1, 0.5],
            extrapolate: "clamp",
          });

          const opacity = position.interpolate({
            inputRange: [isDisappearing, isTop, isBottom, isAppearing],
            outputRange: [0.5, 1, 1, 0.5],
          });

          return (
            <Animated.View style={{ opacity, transform: [{ translateY }, { scale }] }}>
              <ItemListImage
                image={{ uri: item.file }}
                latitude={item.latitude}
                longitude={item.longitude}
                time={item.created_at}
              />
            </Animated.View>
          )
        }}
      />
    </View>
  )
}

export default ListPhoto

const styles = StyleSheet.create({})
