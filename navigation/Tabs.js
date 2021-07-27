import React, { useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Movies from "../screen/Movies";
import Tv from "../screen/Tv";
import Search from "../screen/Search";
import Favs from "../screen/Favs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";
import { Button, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const Tabs = createBottomTabNavigator();
const getHeaderName = (route) =>
  getFocusedRouteNameFromRoute(route) || "Movies";

export default ({ navigation, route }) => {
  useLayoutEffect(() => {
    const title = getHeaderName(route);
    navigation.setOptions({ title: title });
  }, [route]);
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          // let iconName = Platform.OS === "ios" ? "ios-" : "md-";
          let iconName = "md-";
          if (route.name === "Movies") {
            iconName += "film";
          } else if (route.name === "Tv") {
            iconName += "tv";
          } else if (route.name === "Search") {
            iconName += "search";
          } else if (route.name === "Favs") {
            iconName += "heart";
          }
          return (
            <Icon name="md-film" color={focused ? "white" : "gray"} size={30} />
            // <Text>하이</Text>
          );
        },
      })}
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: "white",
          borderTopColor: "black",
        },
      }}
    >
      <Tabs.Screen name="Movies" component={Movies} />
      <Tabs.Screen name="Tv" component={Tv} />
      <Tabs.Screen name="Search" component={Search} />
      <Tabs.Screen name="Favs" component={Favs} />
    </Tabs.Navigator>
  );
};
