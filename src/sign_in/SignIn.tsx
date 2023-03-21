import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, TextInput, Text, Image } from "react-native";
import "react-native-gesture-handler";
import styles from "./Style";
import { connect } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import {
  getloginAction,
  logoutAction,
  checkvalidateAction,
} from "../redux/actions";

const SignIn = (props: any) => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const url = "https://dog.ceo/api/breeds/image/random";
  const error_message = props.loginReducer.errorMessage;
  const storeData = async () => {
    if (email != "" && password != "") {
      let datasend = { email: email, password: password };
      await props.login(datasend);
      await navigation.navigate("Details");
    } else {
      let datasend = { email: email, password: password };
      await props.checkvalidate(datasend);
      console.log("Email or Password is empty.");
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: "https://assets-ng.rehome-navi.com/lp_assets/regist/images/logo.png",
        }}
      />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <Text style={styles.errorMessage}>{error_message}</Text>
      <TouchableOpacity style={styles.loginBtn} onPress={storeData}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (reducer: any) => ({
  loginReducer: reducer.loginReducer,
});

const mapDispatchToProps = (dispatch: Function) => ({
  login: getloginAction(dispatch),
  logout: logoutAction(dispatch),
  checkvalidate: checkvalidateAction(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
