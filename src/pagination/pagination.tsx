import React from "react";
import { StyleSheet } from "react-native";
import SignIn from "../sign_in/SignIn";
import { Details } from "../details";
import Loading from "../loading/Loading";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();
const Pagination = ({ navigation }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Loading" component={Loading} />
        <Stack.Screen name="Home" component={SignIn} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Pagination;

const styles = StyleSheet.create({
  container: { flex: 1 },
  row: { flex: 1, flexDirection: "row" },
});
