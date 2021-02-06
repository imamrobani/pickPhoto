import React, { useEffect } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Header, ItemListImage } from '../../components'
import { getListPhotos } from '../../redux/action/listPhoto'

const ListPhoto = ({ navigation }) => {
  const dispatch = useDispatch()
  const { photos } = useSelector(state => state.listPhotoReducer)

  useEffect(() => {
    dispatch(getListPhotos())
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <Header
        title='List Photos'
        subTitle='Enjoy with your photo'
        onBack={() => navigation.goBack()}
      />
      <FlatList
        data={photos}
        keyExtractor={(item, index) => item.id.toString()}
        renderItem={({ item }) =>
          <ItemListImage
            image={{ uri: item.file }}
            latitude={item.latitude}
            longitude={item.longitude}
            time={item.created_at}
          />
        }
      />
    </View>
  )
}

export default ListPhoto

const styles = StyleSheet.create({

})
