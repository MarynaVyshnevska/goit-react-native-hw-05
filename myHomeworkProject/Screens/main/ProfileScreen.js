import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  FlatList,
  Image,
  Pressable,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import { examplePosts } from "../../components/Post/examplePosts";
import Post, { PostCountry } from "../../components/Post/Post";

const userAvatar = "../../assets/images/example/user-img.jpg";
const wallpaper = "../../assets/images/photoBG.jpg";

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.imageBG} source={require(wallpaper)}>
        <View style={styles.containerUser}>
           <ImageBackground
            // sourse={require(userAvatar)}
            sourse={{uri: 'https://hips.hearstapps.com/hmg-prod/images/the-sound-of-magic-ji-chang-wook-1652269621.jpg'}}
            style={styles.avatar}
            resizeMode="cover"
          >
            <Pressable
              style={styles.deleteAvatarButton}
              onPress={() => {
                console.log("Видалити аватар");
              }}
            >
              <AntDesign name="close" size={20} color="#BDBDBD" />
            </Pressable>
          </ImageBackground>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Login");
            }}
            style={styles.logoutButton}
          >
            <View>
              <Feather name="log-out" size={24} color="#BDBDBD" />
            </View>
          </TouchableOpacity>
          <Text style={styles.title}>Natali Romanova</Text>
          <FlatList
            data={examplePosts}
            renderItem={({ item }) => <PostCountry data={item} />}
            keyExtractor={(item) => item.id}
            style={styles.list}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#FFFFFF",
    // paddingHorizontal: 16,
    // borderTopLeftRadius: 25,
    // borderTopRightRadius: 25,
    // paddingBottom: 78,
    // justifyContent: "flex-end",
  },
  imageBG: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-start",
  },
  containerUser: {
    flex: 1,
    marginTop: 147,
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  avatar: {
    position: "absolute",
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    top: 0,
    left: "50%",
    borderRadius: 16,
    transform: [{ translateY: -60 }, { translateX: -60 }],
  },
  deleteAvatarButton: {
    display: "flex",
    width: 25,
    height: 25,
    backgroundColor: "#FFFFFF",
    borderRadius: "50%",
    borderColor: "transparent",
    borderStyle: "solid",
    borderWidth: 1,
    position: "absolute",
    top: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
    transform: [{ translateY: 81 }, { translateX: 14 }],
  },
  iconAdd: {
    width: 13,
    height: 13,
  },
  logoutButton: {
    display: "flex",
    width: 24,
    height: 24,
    backgroundColor: "#FFFFFF",
    borderRadius: "50%",
    borderColor: "transparent",
    borderStyle: "solid",
    borderWidth: 1,
    position: "absolute",
    top: 20,
    right: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    marginTop: 92,
    textAlign: "center",
    fontFamily: "RobotoMedium",
    fontWeight: "500",
    fontSize: 30,
    color: "#212121",
    lineHeight: 35,
    letterSpacing: 0.01,
    marginBottom: 31,
  },
  list: {
    marginHorizontal: 16,
  },
});
