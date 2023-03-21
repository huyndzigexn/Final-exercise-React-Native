// In App.js in a new project

import React, { useState, useEffect, useRef } from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./Style";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import Button from "./Button";
import { connect } from "react-redux";
import { logoutAction, getImageAction } from "../redux/actions";
import * as ImagePicker from "react-native-image-picker";

const Test = (props: any) => {
  const arrayImage = props.detailReducer.arrImage;
  const navigation = useNavigation();
  const [image, setImage] = useState<string>(
    "https://images.dog.ceo/breeds/sheepdog-english/n02105641_9319.jpg"
  );

  const [resourcePath, setState] = useState();
  const imageGalleryLaunch = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: "images",
      },
    };
    ImagePicker.launchImageLibrary(options, (res) => {
      console.log("Response = ", res);
      if (res.didCancel) {
        console.log("User cancelled image picker");
      } else if (res.error) {
        console.log("ImagePicker Error: ", res.error);
      } else if (res.customButton) {
        console.log("User tapped custom button: ", res.customButton);
        alert(res.customButton);
      } else {
        const source = { uri: res.uri };
        console.log("response", JSON.stringify(res));
        setState({
          filePath: res,
          fileData: res.data,
          fileUri: res.uri,
        });
      }
    });
  };

  const url = "https://dog.ceo/api/breeds/image/random";
  const [seconds, setCount] = useState(10);
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
      let datasend = { email: "", password: "" };
      await props.logout(datasend);
      navigation.navigate("Home");
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  const showImageDog = () => {
    return props.detailReducer.arrImage.map(
      (source: { uri: string }, index: number) => {
        if (source.uri != "") {
          return (
            <View style={styles.currentImg} key={index}>
              <Image source={source} style={styles.dogImage}></Image>
            </View>
          );
        }
        return (
          <View style={styles.currentImg} key={index}>
            <View style={styles.dogImage}>
              {props.detailReducer.position == index ? (
                <Button position={props.detailReducer.position} />
              ) : (
                <Text style={styles.waiting}>waiting</Text>
              )}
            </View>
          </View>
        );
      }
    );
  };
  useEffect(() => {
    const getImg = setTimeout(() => {
      console.log(props.detailReducer.position);
      axios(url)
        .then((value) => {
          console.log(value.data);
          if (value.data.status == "success") {
            props.getImage(value.data);
          } else {
            // props.getImage(
            //   "https://images.dog.ceo/breeds/bluetick/n02088632_1750.jpg"
            // );
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }, 1000);
    if (props.detailReducer.position == 9) {
      clearInterval(getImg);
    }
  }, [props.detailReducer.position]);
  return (
    <View style={styles.container}>
      <View style={styles.userImage}>
        <View style={styles.btnLogout}>
          <TouchableOpacity style={styles.button} onPress={clearData}>
            <Text style={[styles.buttonText, styles.buttonColor]}>LOG OUT</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.mainImg}>
          <Image
            source={{
              uri: resourcePath ? resourcePath : image,
            }}
            style={styles.img}
          ></Image>
        </View>
        <View style={styles.btnUpdate}>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              ImagePicker.launchImageLibrary(
                {
                  mediaType: "photo",
                  includeBase64: false,
                  maxHeight: 200,
                  maxWidth: 200,
                },
                (response) => {
                  console.log(response.assets[0].uri);
                  setState(response.assets[0].uri);
                }
              )
            }
          >
            <Text style={styles.buttonText}>Update</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.apiImage}>{showImageDog()}</View>
    </View>
  );
};
const mapStateToProps = (reducer: any) => ({
  loginReducer: reducer.loginReducer,
  detailReducer: reducer.detailReducer,
});

const mapDispatchToProps = (dispatch: Function) => ({
  logout: logoutAction(dispatch),
  getImage: getImageAction(dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(Test);
