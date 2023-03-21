// In App.js in a new project

import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./Style";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Test } from "../test";
import { Calculator } from "../calculator";
import Ionicons from "react-native-vector-icons/Ionicons";
// import Icon from 'react-native-vector-icons/FontAwesome'
import { useSelector } from "react-redux";

const ImageScreen = () => {
  const [image, setImage] = useState<string>("");

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
      console.warn("!!! TOKEN was cleared !!!");
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

const Tab = createBottomTabNavigator();
const DetailsScreen = () => {
  const [position, listImg] = useSelector((state: any) => {
    return [state.detailReducer.position, state.detailReducer.arrImage];
  });
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Test") {
            // iconName = focused ? "medical" : "medical-outline";
          } else if (route.name === "Calculator") {
            iconName = focused ? "calculator" : "calculator-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Calculator" component={Calculator} />
      <Tab.Screen
        name="Test"
        component={Test}
        options={{
          tabBarLabel: "Image",
          tabBarIcon: ({ color, size }) =>
            position != 0 ? (
              <Image
                source={listImg[position - 1]}
                style={{ width: 30, height: 30 }}
              ></Image>
            ) : (
              <Ionicons name="medical" size={size} color={color} />
            ),
        }}
      />
    </Tab.Navigator>
  );
};
export default DetailsScreen;
