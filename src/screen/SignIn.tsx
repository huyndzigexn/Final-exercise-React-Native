// In App.js in a new project

import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, TextInput, Text, Image} from 'react-native';
// import RNBootSplash from 'react-native-bootsplash';
import 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import styles from './Style';

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const url = 'https://dog.ceo/api/breeds/image/random';
  const storeData = async value => {
    console.log('Value Stored Successfully.');
    if (email != null && password != null) {
      let urlImage = await axios
        .get(url)
        .then(json => {
          console.log(json.data.message);
          return json.data.message;
        })
        .catch(error => console.log(error));
      await AsyncStorage.setItem('storageImage', urlImage);
      navigation.navigate('Details');
    } else {
      console.log('Email or Password is empty.');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://assets-ng.rehome-navi.com/lp_assets/regist/images/logo.png',
        }}
      />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={email => setEmail(email)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={password => setPassword(password)}
        />
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={storeData}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};
export default SignIn;
