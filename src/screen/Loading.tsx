// In App.js in a new project

import React, {useState, useEffect} from 'react';
import {View, Image} from 'react-native';
import 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './Style';

const Loading = ({navigation}) => {
  useEffect(() => {
    AsyncStorage.getItem('storageImage').then(value => {
      if (value) {
        navigation.navigate('Details');
      } else {
        navigation.navigate('Home');
      }
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://assets-ng.rehome-navi.com/lp_assets/regist/images/logo.png',
        }}
      />
    </View>
  );
};
export default Loading;
