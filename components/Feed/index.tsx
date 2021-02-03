import React from "react";
import { Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import tweets from "../../data/tweets";
import Tweet from "../Tweet";
import styles from "./styles";

const Feed = () => (
  <View style={styles.FeedContainer}>
    <FlatList
      data={tweets}
      renderItem={({ item }) => <Tweet tweet={item} />}
      keyExtractor={(item) => item.id}
      decelerationRate={"normal"}
    />
  </View>
);

export default Feed;
