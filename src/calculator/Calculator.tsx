import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Button from "./Button";
import { connect } from "react-redux";
import { caculateAction } from "../redux/actions";

function App(props: any) {
  const enter = props.dogImageReducer.enter;
  const checkPress = props.dogImageReducer.checkPress;

  const tapScreen = (type: string, value: any) => {
    props.caculate({ type: type, value: value });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.fontNumber}>{enter}</Text>
      <View style={styles.row}>
        <Button
          value="AC"
          styles={[styles.btn, styles.btnGray]}
          press={() => tapScreen("clear", "")}
        />
        <Button
          value="+/-"
          styles={[styles.btn, styles.btnGray]}
          press={() => tapScreen("posneg", "/")}
        />
        <Button
          value="%"
          styles={[styles.btn, styles.btnGray]}
          press={() => tapScreen("percent", "")}
        />
        <Button
          value="/"
          styles={[
            styles.btn,
            styles.btnOrange,
            checkPress == "/" ? styles.btnPressDivide : styles.btnOrange,
          ]}
          press={() => tapScreen("operator", "/")}
        />
      </View>
      <View style={styles.row}>
        <Button
          value="7"
          styles={styles.btn}
          press={() => tapScreen("number", 7)}
        />
        <Button
          value="8"
          styles={styles.btn}
          press={() => tapScreen("number", 8)}
        />
        <Button
          value="9"
          styles={styles.btn}
          press={() => tapScreen("number", 9)}
        />
        <Button
          value="x"
          styles={[
            styles.btn,
            styles.btnOrange,
            checkPress == "*" ? styles.btnPressMultiply : styles.btnOrange,
          ]}
          press={() => tapScreen("operator", "*")}
        />
      </View>
      <View style={styles.row}>
        <Button
          value="4"
          styles={styles.btn}
          press={() => tapScreen("number", 4)}
        />
        <Button
          value="5"
          styles={styles.btn}
          press={() => tapScreen("number", 5)}
        />
        <Button
          value="6"
          styles={styles.btn}
          press={() => tapScreen("number", 6)}
        />
        <Button
          value="-"
          styles={[
            styles.btn,
            styles.btnOrange,
            checkPress == "-" ? styles.btnPressMinus : styles.btnOrange,
          ]}
          press={() => tapScreen("operator", "-")}
        />
      </View>
      <View style={styles.row}>
        <Button
          value="1"
          styles={styles.btn}
          press={() => tapScreen("number", 1)}
        />
        <Button
          value="2"
          styles={styles.btn}
          press={() => tapScreen("number", 2)}
        />
        <Button
          value="3"
          styles={styles.btn}
          press={() => tapScreen("number", 3)}
        />
        <Button
          value="+"
          styles={[
            styles.btn,
            styles.btnOrange,
            checkPress == "+" ? styles.btnPressPlus : styles.btnOrange,
          ]}
          press={() => tapScreen("operator", "+")}
        />
      </View>
      <View style={styles.row}>
        <Button
          value="0"
          styles={[styles.btn, styles.btnZero]}
          press={() => tapScreen("number", 0)}
        />
        <Button
          value="."
          styles={styles.btn}
          press={() => tapScreen("number", ".")}
        />
        <Button
          value="="
          styles={[styles.btn, styles.btnOrange]}
          press={() => tapScreen("equal", "")}
        />
      </View>
    </View>
  );
}

const mapStateToProps = (reducer: any) => ({
  dogImageReducer: reducer.dogImageReducer,
});

const mapDispatchToProps = (dispatch: Function) => ({
  caculate: caculateAction(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
const styles = StyleSheet.create({
  btnPressPlus: {
    borderColor: "black",
    backgroundColor: "#fc5a17",
    borderWidth: 1,
  },
  btnPressMinus: {
    borderColor: "black",
    backgroundColor: "#fc5a17",
    borderWidth: 1,
  },
  btnPressMultiply: {
    borderColor: "black",
    backgroundColor: "#fc5a17",
    borderWidth: 1,
  },
  btnPressDivide: {
    borderColor: "black",
    backgroundColor: "#fc5a17",
    borderWidth: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#202020",
    justifyContent: "flex-end",
  },
  fontNumber: {
    fontSize: 60,
    color: "#fff",
    textAlign: "right",
  },
  row: {
    flexDirection: "row",
  },
  btnText: {
    color: "#f2f0e9",
    fontSize: 40,
    fontWeight: "300",
  },

  btn: {
    backgroundColor: "#b5b5b5",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 0.2,
    borderBottomWidth: 0,
  },
  btnZero: {
    flex: 0,
    width: "50%",
  },
  btnOrange: {
    backgroundColor: "#fc9d17",
  },
  btnGray: {
    backgroundColor: "gray",
  },
});
