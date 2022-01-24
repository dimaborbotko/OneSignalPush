import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function First({navigation}) {
  return (
    <View>
      <Text>First</Text>
      <Button title='To Second' onPress={() => navigation.navigate('second')}/>
    </View>
  );
}

const styles = StyleSheet.create({});
