// In App.js in a new project

import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./Style";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import Button from "./Button";

const Test = () => {
  const navigation = useNavigation();
  const [image, setImage] = useState<string>(
    "https://images.dog.ceo/breeds/sheepdog-english/n02105641_9319.jpg"
  );
  useEffect(() => {
    AsyncStorage.getItem("storageImage").then((value) => {
      if (value == "") {
        navigation.navigate("Loading");
      }
    });
  }, []);
  const getData = async () => {
    try {
      const imageUrl = await AsyncStorage.getItem("storageImage");
      setImage(imageUrl);
    } catch (e) {
      console.log(e);
    }
  };
  const clearData = async () => {
    try {
      await AsyncStorage.setItem("storageImage", "");
      navigation.navigate("Home");
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.userImage}>
        <View style={styles.btnLogout}>
          <TouchableOpacity style={styles.button} onPress={clearData}>
            <Text style={[styles.buttonText, styles.buttonColor]}>LOG OUT</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.mainImg}>
          <Image source={{ uri: image }} style={styles.img}></Image>
        </View>
        <View style={styles.btnUpdate}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Update</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.apiImage}>
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
      </View>
    </View>
  );
};

export default Test;
