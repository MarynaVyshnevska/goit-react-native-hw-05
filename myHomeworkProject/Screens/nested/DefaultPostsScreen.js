import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Image, FlatList } from "react-native";

import { examplePosts } from "../../components/Post/examplePosts";
import { Post } from "../../components/Post/Post";

const DefaultPostsScreen = ({ route, navigation }) => {
  const [posts, setPosts] = useState(examplePosts);

  useEffect(() => {
    if (route.params) {
      console.log("route params", route.params.newData);
      setPosts((prevState) => [route.params.newData, ...prevState]);
    }
  }, [route.params]);

  console.log("posts ---->", posts);
  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <Image
          style={styles.avatar}
          source={require("../../assets/images/example/user-img.jpg")}
        />
        <View style={styles.info}>
          <Text style={styles.name}>Natali Romanova</Text>
          <Text style={styles.email}>email@example.com</Text>
        </View>
      </View>
      <FlatList
        data={posts}
        renderItem={({ item }) => <Post data={item} navigation={navigation} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default DefaultPostsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "#FFFFFF",
    paddingVertical: 16,
  },
  userContainer: {
    justifyContent: "flex-start",
    paddingVertical: 32,
    flexDirection: "row",
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 16,
  },
  info: {
    marginLeft: 8,
    // verticalAlign: 'middle',
    paddingVertical: 16,
  },
  name: {
    fontFamily: "RobotoBold",
    fontWeight: "700",
    fontSize: 13,
    lineHeight: 15.23,
    color: "#212121",
  },
  email: {
    fontFamily: "RobotoRegular",
    fontWeight: "400",
    fontSize: 11,
    lineHeight: 12.89,
    color: "#212121cc",
  },
});
