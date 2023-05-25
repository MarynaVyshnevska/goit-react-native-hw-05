import React from "react";
import { TouchableOpacity, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Octicons } from "@expo/vector-icons";

import DefaultPostsScreen from "../nested/DefaultPostsScreen";
import CommentsScreen from "../nested/CommentsScreen";
import MapScreen from "../nested/MapScreen";

const NestedScreen = createStackNavigator();

const PostsScreen = ({ navigation }) => {
  // console.log('navigation', navigation);

  return (
    <NestedScreen.Navigator initialRouteName="DefaultPostsScreen">
      <NestedScreen.Screen
        name="DefaultPostsScreen"
        component={DefaultPostsScreen}
        options={{
          gestureEnabled: true,
          headerShown: false,
        }}
      />
      <NestedScreen.Screen
        name="CommentsScreen"
        component={CommentsScreen}
        options={{
          title: "Коментарі",
          headerTitleAlign: "center",
          headerTitleStyle,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("DefaultPostsScreen")}
              style={{ marginLeft: 16 }}
            >
              <View>
                <Octicons name="arrow-left" size={24} color="#212121cc" />
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <NestedScreen.Screen
        name="MapScreen"
        component={MapScreen}
        options={{
          title: "Мапа",
          headerTitleAlign: "center",
          headerTitleStyle,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("DefaultPostsScreen")}
              style={{ marginLeft: 16 }}
            >
              <View>
                <Octicons name="arrow-left" size={24} color="#212121cc" />
              </View>
            </TouchableOpacity>
          ),

        }}
      />
    </NestedScreen.Navigator>
  );
};

export default PostsScreen;

const headerTitleStyle = {
  fontFamily: "RobotoRegular",
  fontWeight: "500",
  fontSize: 17,
  color: "#212121",
  letterSpacing: -0.408,
  lineHeight: 22,
};
