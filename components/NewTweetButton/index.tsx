import React from "react";
import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const NewTweetButton = () => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("NewTweet");
  };

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      activeOpacity={0.9}
    >
      <MaterialCommunityIcons
        style={styles.icon}
        name={"feather"}
        size={32}
        color={"white"}
      />
    </TouchableOpacity>
  );
};

export default NewTweetButton;
