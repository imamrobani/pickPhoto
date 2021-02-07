import { useEffect } from 'react'
import firebase from 'react-native-firebase'

export default () => {
  useEffect(() => {
    messageListener()

    return () => messageListener()
  }, [])

  const messageListener = async () => {
    const channel = new firebase.notifications.Android.Channel(
      'channelId',
      'Channel Name',
      firebase.notifications.Android.Importance.High
    ).setDescription('A natural description of the channel')
    firebase.notifications().android.createChannel(channel)

    const notificationListener = await firebase.notifications().onNotification((notification) => {
      const localNotification = new firebase.notifications.Notification({
        sound: 'default',
        show_in_foreground: true
      })
        .setNotificationId(notification.notificationId)
        .setTitle(notification.title)
        .setSubtitle(notification.subtitle)
        .setBody(notification.body)
        .setData(notification.data)
        .android.setChannelId('channelId') // e.g. the id you chose above
        .android.setSmallIcon('ic_launcher') // create this icon in Android Studio
        .android.setColor('#d9435e') // you can set a color here
        .android.setAutoCancel(true) // Njay bisa juga ini buat hapus nya ternyata
      //.android.setPriority(firebase.notifications.Android.Priority.High)

      firebase.notifications()
        .displayNotification(localNotification)
        .catch(err => console.error(err))
      firebase.notifications().removeDeliveredNotification(notification.notificationId)

      // this.props.onUnreadMessage(this.state.token)
      console.log('notification ', notification)
    })


    /* Konidisi jika aplikasi sedang running background */
    const notificationOpenedListener = await firebase.notifications().onNotificationOpened((notificationOpen) => {
      const { title, body } = notificationOpen.notification

    })

    /* Konidisi jika aplikasi di tutup (kill) */
    const notificationOpen = await firebase.notifications().getInitialNotification()
    if (notificationOpen) {
      // Get information about the notification that was opened
      const { title, body } = notificationOpen.notification
      console.log('getInitialNotification.notification', notificationOpen.notification)
      const notification = notificationOpen.notification

    }

    /*Triggered for data only payload in foreground */
    const messageListener = await firebase.messaging().onMessage((message) => {
      console.log('crot', message)
    })
  }

  // return [messageListener]
}