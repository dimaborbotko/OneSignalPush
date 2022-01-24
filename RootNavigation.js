import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export function navigate(name){
    if(navigationRef.isReady()) {
        navigationRef.navigate(name)
    }
}
