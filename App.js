import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import OneSignal from 'react-native-onesignal';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import First from './screens/First';
import Second from './screens/Second';
import {navigationRef} from './RootNavigation';
import * as RootNavigation from './RootNavigation';

const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    OneSignal.setLogLevel(6, 0);
    OneSignal.setAppId('da3195ba-f77f-4e6f-a575-b3690f653d51');

    OneSignal.setNotificationWillShowInForegroundHandler(
      notificationReceivedEvent => {
        console.log(
          'OneSignal: notification will show in foreground:',
          notificationReceivedEvent,
        );
        let notification = notificationReceivedEvent.getNotification();
        console.log('notification: ', notification);
        const data = notification.additionalData;
        console.log('additionalData: ', data);
        if (data) {
          const link = data.link;
          RootNavigation.navigate(link);
        } else {
          RootNavigation.navigate('first');
        }

        // Complete with null means don't show a notification.
        notificationReceivedEvent.complete(notification);
      },
    );

    OneSignal.setNotificationOpenedHandler(result => {
      console.log('OneSignal: notification opened:', result);
      if (result.notification.additionalData) {
        const link = result.notification.additionalData.link;
        RootNavigation.navigate(link);
      } else {
        RootNavigation.navigate('first');
      }
    });
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen name="first" component={First} />
        <Stack.Screen name="second" component={Second} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
