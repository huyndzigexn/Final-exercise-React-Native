import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  bootsplash: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  tinyLogo: {
    width: "100%",
    height: 55,
    marginBottom: 50,
  },
  tinyLogoDetail: {
    width: "100%",
    height: "50%",
    marginBottom: 50,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginBottom: 40,
  },
  inputView: {
    backgroundColor: "#dadada",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#553819",
  },
  loginText: {
    color: "#fff",
  },
  errorMessage: {
    color: "red",
    fontWeight: "600",
  },
});
export default styles;
