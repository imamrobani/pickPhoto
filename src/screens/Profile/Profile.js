import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Dummy5, ProfileDummy } from '../../assets'
import { Colors, Fonts } from '../../const'

const Profile = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.profileDetail}>
        <View style={styles.photo}>
          <View style={styles.borderPhoto}>
            <Image source={Dummy5} style={styles.photoContainer} />
          </View>
        </View>
        <Text style={styles.name}>Imam Robani</Text>
        <Text style={styles.email}>imamrob@gmail.com</Text>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile Screen</Text>
      </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  content: { flex: 1, marginTop: 24 },
  profileDetail: { backgroundColor: 'white', paddingBottom: 26 },
  name: {
    fontSize: 18,
    fontFamily: Fonts.POPPINS_MEDIUM,
    color: Colors.black,
    textAlign: 'center'
  },
  email: {
    fontSize: 13,
    fontFamily: Fonts.POPPINS_LIGHT,
    color: Colors.blueyGrey,
    textAlign: 'center'
  },
  photo: {
    alignItems: 'center',
    marginTop: 26,
    marginBottom: 16
  },
  borderPhoto: {
    borderWidth: 1,
    borderColor: '#8D92A3',
    width: 110,
    height: 110,
    borderRadius: 110,
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center'
  },
  photoContainer: {
    width: 90,
    height: 90,
    borderRadius: 90,
    backgroundColor: '#F0F0F0',
    padding: 24
  }
})
