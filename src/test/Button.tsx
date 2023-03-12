import React from "react";
import { StyleSheet, Image, View } from "react-native";
import stylesA from "./Style";

// type CatProps = {
//   value: string;
//   styles: any;
//   press: any;
// };
export default function Button() {
  return (
    <View style={stylesA.currentImg}>
      <Image source={{ uri: 'https://reactjs.org/logo-og.png' }} style={stylesA.dogImage}></Image>
    </View>
  );
}


