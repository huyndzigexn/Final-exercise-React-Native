// In App.js in a new project

import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './Style';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const ImageScreen = () => {
  const [image, setImage] = useState<string>('');

  const getData = async () => {
    try {
      const imageUrl = await AsyncStorage.getItem('storageImage');
      setImage(imageUrl);
    } catch (e) {
      console.log(e);
    }
  };
  const clearData = async () => {
    try {
      await AsyncStorage.setItem('storageImage', '');
      console.warn('!!! TOKEN was cleared !!!');
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <View style={styles.container}>
      <Image
        key={image}
        style={styles.tinyLogoDetail}
        source={{
          uri: image,
        }}
      />
    </View>
  );
};

const ClearScreen = () => {
  const [image, setImage] = useState<string>('');

  const getData = async () => {
    try {
      const imageUrl = await AsyncStorage.getItem('storageImage');
      setImage(imageUrl);
    } catch (e) {
      console.log(e);
    }
  };
  const clearData = async () => {
    try {
      await AsyncStorage.setItem('storageImage', '');
      console.warn('!!! TOKEN was cleared !!!');
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.loginBtn} onPress={clearData}>
        <Text style={styles.loginText}>CLEAR TOKEN</Text>
      </TouchableOpacity>
    </View>
  );
};

const Tab = createBottomTabNavigator();
const DetailsScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Image" component={ImageScreen} />
      <Tab.Screen name="Clear" component={ClearScreen} />
    </Tab.Navigator>
  );
};
export default DetailsScreen;
