import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Header, ItemListImage } from '../../components'

const ListPhoto = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <Header
        title='List Photos'
        subTitle='Enjoy with your photo'
        onBack={() => navigation.goBack()}
      />
      <ItemListImage />
    </View>
  )
}

export default ListPhoto

const styles = StyleSheet.create({

})
