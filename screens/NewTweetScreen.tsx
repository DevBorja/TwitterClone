import { AntDesign, EvilIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

import EditScreenInfo from "../components/EditScreenInfo";
import Feed from "../components/Feed";
import NewTweetButton from "../components/NewTweetButton";
import ProfilePicture from "../components/ProfilePicture";
import { Text, View } from "../components/Themed";
import Colors from "../constants/Colors";

export default function NewTweetScreen() {
  const [tweet, settweet] = React.useState("");
  const [imageUrl, setimageUrl] = useState("");

  const onPostTweet = () => {
    console.log(`Posting the Tweet: ${tweet}
    Image: ${imageUrl}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <AntDesign name={"close"} size={30} color={Colors.light.tint} />
        <TouchableOpacity style={styles.button} onPress={onPostTweet}>
          <Text style={styles.buttonText}>Tweet</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.newTweeetContainer}>
        <ProfilePicture
          image={`https://media.bitdegree.org/storage/media/images/2018/08/what-is-a-web-developer.jpg`}
        />
        <View style={styles.inputsContainer}>
          <TextInput
            value={tweet}
            onChangeText={settweet}
            multiline={true}
            numberOfLines={5}
            style={styles.tweetInput}
            placeholder={"Whats's happening?"}
          />
          <TextInput
            value={imageUrl}
            onChangeText={setimageUrl}
            style={styles.imageInput}
            placeholder={"Image url (optional)"}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    backgroundColor: "white",
  },
  newTweeetContainer: {
    flexDirection: "row",
    padding: 15,
  },
  inputsContainer: {
    marginLeft: 10,
  },
  headerContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  button: {
    backgroundColor: Colors.light.tint,
    borderRadius: 30,
  },
  buttonText: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  tweetInput: {
    minHeight: 64,
    maxHeight: 600,
    fontSize: 18,
  },
  imageInput: {},
});
