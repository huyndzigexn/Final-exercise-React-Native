import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    width: "25%",
    height: 100,
    alignSelf: "center",
    borderStartWidth: 1,
    borderRadius: 50,
  },

  userImage: {
    flex: 2,
  },
  btnLogout: {
    flex: 1,
    alignSelf: "flex-end",
    color: "red",
    marginRight: "2%",
  },
  btnUpdate: {
    flex: 1,
    alignSelf: "center",
    color: "blue",
  },
  mainImg: {
    flex: 2,
  },
  button: {
    borderWidth: 1,
    borderRadius: 50,
    padding: 5,
    paddingHorizontal: 15,
    marginTop: 9,
    backgroundColor: "#e7e7e7",
    borderColor: "#e7e7e7",
  },
  buttonText: {
    color: "blue",
    fontWeight: "600",
  },
  buttonColor: {
    color: "red",
  },
  apiImage: {
    flex: 4,
    backgroundColor: "#e7e7e7",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  currentImg: {
    flexBasis: "32%",
    height: "30%",
    marginTop: 5,
  },
  dogImage: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  waiting: {
    color: "green",
    fontWeight: "600",
  },
});
export default styles;
