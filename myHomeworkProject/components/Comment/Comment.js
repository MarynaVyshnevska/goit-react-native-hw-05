import React from "react";
import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";

export const Comment = ({ data, navigation }) => {
  console.log(data);
  const { description, id, owner, postId, timeCreate } = data;

  return (
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={require("../../assets/images/example/user-img.jpg")}
      />
      <View style={styles.textContainer}>
        <Text style={styles.textBody}>{description}</Text>
        <Text style={styles.textDate}>{timeCreate}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    backgroundColor: "#ffffff",
    flexDirection: "row",
  },
  avatar: {
    width: 28,
    height: 28,
    borderRadius: 50,
  },
  textContainer: {
    fontFamily: "RobotoRegular",
    fontWeight: "400",
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 6,
    backgroundColor: "#00000008",
    marginBottom: 24,
  },
  textBody: {
    fontSize: 13,
    lineHeight: 18,
    color: "#212121",
      textAlign: "left",
    paddingRight: 16,
  },
  textDate: {
    fontSize: 10,
    lineHeight: 11.72,
    color: "#BDBDBD",
      textAlign: "right",
    paddingRight: 16,
  },
});
