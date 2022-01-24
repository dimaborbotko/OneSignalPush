import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function Second({navigation}) {
  return (
    <View>
      <Text>Second</Text>
      <Button title='To First' onPress={() => navigation.navigate('first')}/>
    </View>
  );
}

const styles = StyleSheet.create({});
