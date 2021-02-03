import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  tweetHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tweetHeaderNames: {
    flexDirection: "row",
  },
  name: {
    marginRight: 5,
    fontWeight: "bold",
  },
  username: {
    marginHorizontal: 5,
    color: "grey",
  },
  craetedAt: {
    marginHorizontal: 5,
    color: "grey",
  },
  content: {
    lineHeight: 19,
    fontSize: 14,
    marginTop: 5,
  },
  image: {
    width: "100%",
    height: 175,
    borderRadius: 20,
    resizeMode: "cover",
    overflow: "hidden",
    marginVertical: 10,
    backgroundColor: "red",
  },
});

export default styles;
