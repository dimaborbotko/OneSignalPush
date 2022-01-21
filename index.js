/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import OneSignal from 'react-native-onesignal';

OneSignal.setLogLevel(6, 0);
OneSignal.setAppId("da3195ba-f77f-4e6f-a575-b3690f653d51");

OneSignal.setNotificationWillShowInForegroundHandler(notificationReceivedEvent => {
    console.log("OneSignal: notification will show in foreground:", notificationReceivedEvent);
    let notification = notificationReceivedEvent.getNotification();
    const data = notification.additionalData
    console.log("additionalData: ", data);
    notificationReceivedEvent.complete(notification);
})

OneSignal.setNotificationOpenedHandler(notification => {
    console.log("OneSignal: notification opened:", notification);
  });

AppRegistry.registerComponent(appName, () => App);
