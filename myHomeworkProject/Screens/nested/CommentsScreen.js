import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  TouchableNativeFeedback,
  Keyboard,
  ScrollView,
} from "react-native";

import { exampleComments } from "../../components/Comment/exampleComents";
import { Comment } from "../../components/Comment/Comment";
import { v4 as uuidv4 } from "uuid";
import { AntDesign } from "@expo/vector-icons";

const CommentsScreen = ({ route, navigation }) => {
  console.log(route.params);
  const { title, image, comments, id, photo } = route.params.data;
  const [description, setDescription] = useState("");
  const [newComment, setNewComment] = useState(exampleComments);
  const [commentsList, setCommentsList] = useState(exampleComments);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    if (commentsList) {
      setNewComment((prevState) => [...prevState, newComment]);
    }
  }, [commentsList]);

  const handleCreateComment = () => {
    const newComment = {
      id: uuidv4(),
      // owner: route.params.user.id,
      // postId: route.params.newData.id,
      description,
      timeCreate: Date.now(),
    };

    console.log(newComment);
    setNewComment(newComment);
    setDescription("");
  };

  const keyboardHidden = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  return (

    <ScrollView style={styles.container} onPress={keyboardHidden}>

        <Image style={styles.image} source={photo ? { uri: photo } : image} />
        <FlatList
          data={commentsList}
          renderItem={({ item }) => (
            <Comment data={item} navigation={navigation} />
          )}
          keyExtractor={(item) => item.id}
          style={styles.list}
        />

          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View style={[styles.createComment, { marginBottom: isShowKeyboard ? 60 : 0 }]}>
              <TextInput
                style={styles.input}
                onFocus={() => setIsShowKeyboard(true)}
                value={description}
                onChangeText={(value) => setDescription(value.trim())}
                placeholder="Коментувати..."
                placeholderTextColor="#BDBDBD"
              />
              <Pressable style={styles.btn} onPress={handleCreateComment}>
                <AntDesign name="arrowup" size={14} color="#FFFFFF" />
              </Pressable>
            </View>
          </KeyboardAvoidingView>


    </ScrollView>
  );
};

export default CommentsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingTop: 32,
    paddingBottom: 32,
    paddingHorizontal: 16,
    backgroundColor: "#FFFFFF",
  },
  image: {
    width: "100%",
    borderRadius: 8,
    height: 240,
  },
  list: {
    marginTop: 32,
  },
  input: {
    fontFamily: "Inter",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 19.36,
    color: "#212121",
    padding: 16,
    borderColor: "#E8E8E8",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 100,
    backgroundColor: "#F6F6F6",
  },
  btn: {
    position: 'absolute',
    top: 8,
    right: 8,
    borderRadius: 50,
    width: 34,
    height: 34,
    padding: 10,
    backgroundColor:  '#FF6C00'
  }
});
