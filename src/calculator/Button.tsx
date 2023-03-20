import React from "react";
import { StyleSheet, Text, TouchableHighlight } from "react-native";

type CatProps = {
  value: string;
  styles: any;
  press: any;
};
var touchProps = {
  activeOpacity: 1,
  underlayColor: "blue", // <-- "backgroundColor" will be always overwritten by "underlayColor"
  // style: isPress ? styles.btnPress : styles.btnNormal, // <-- but you can still apply other style changes
  // onHideUnderlay: () => setIsPress(false),
  // onShowUnderlay: () => setIsPress(true),
  onPress: () => console.log("HELLO"), // <-- "onPress" is apparently required
};

export default function Button(props: CatProps) {
  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor="red"
      style={[props.styles]}
      onPress={props.press}
    >
      <Text style={styles.btnText}>{props.value}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  btnText: {
    color: "#f2f0e9",
    fontSize: 40,
    fontWeight: "300",
  },
});
