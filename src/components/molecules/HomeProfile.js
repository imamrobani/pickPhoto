import React, { useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Dummy5, ProfileDummy } from '../../assets'
import { Colors, Fonts } from '../../const'
import DeviceInfo from 'react-native-device-info'

const isIphoneX = DeviceInfo.hasNotch()

const HomeProfile = () => {
  const [photo, setPhoto] = useState(Dummy5)

  return (
    <View style={styles.profileContainer}>
      <View>
        <Text style={styles.appName}>Pick Photos</Text>
        <Text style={styles.desc}>Let's get some Photos</Text>
      </View>
      <Image source={photo} style={styles.profile} />
    </View>
  )
}

export default HomeProfile

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: isIphoneX ? 48 : 32,
    paddingBottom: 24,
    backgroundColor: 'white'
  },
  appName: { fontSize: 22, fontFamily: Fonts.POPPINS_MEDIUM, color: Colors.black },
  desc: { fontFamily: Fonts.POPPINS_LIGHT, color: Colors.blueyGrey },
  profile: { width: 50, height: 50, borderRadius: 8 },
})
