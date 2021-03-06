import React from "react";
import { View, Text, Image } from "react-native";
import { TweetType } from "../../../types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import moment from "moment";

import styles from "./styles";
import Footer from "./footer";

export type MainContainerProps = {
  tweet: TweetType;
};

const MainContainer = ({ tweet }: MainContainerProps) => (
  <View style={styles.container}>
    <View style={styles.tweetHeaderContainer}>
      <View style={styles.tweetHeaderNames}>
        <Text style={styles.name}>{tweet.user.name} </Text>
        <Text style={styles.username}>{tweet.user.username}</Text>
        <Text style={styles.craetedAt}>
          {moment(tweet.createdAt).fromNow()}
        </Text>
      </View>
      <MaterialCommunityIcons name={"menu-down"} size={16} />
    </View>
    <View>
      <Text style={styles.content}>{tweet.content}</Text>
      {!!tweet.image && (
        <Image style={styles.image} source={{ uri: tweet.image }} />
      )}
    </View>
    <Footer tweet={tweet} />
  </View>
);

export default MainContainer;
