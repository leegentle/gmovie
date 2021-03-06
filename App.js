import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import { Image, StatusBar } from "react-native";
import * as Font from "expo-font";
import { Asset } from "expo-asset";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import Stack from "./navigation/Stack";

const cacheImages = (images) =>
  images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });

const cacheFonts = (fonts) => fonts.map((font) => [Font.loadAsync(font)]);

export default function App() {
  const [isReady, setIsReady] = useState(false);

  const loadAssets = () => {
    const images = cacheImages([
      "https://images.unsplash.com/photo-1557244056-ac3033d17d9a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2V4eXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      require("./assets/splash.png"),
    ]);
    const fonts = cacheFonts([Ionicons.font]);
    console.log(Ionicons.font);

    return Promise.all([...images, ...fonts]);
  };
  const onFinish = () => {
    console.log("done");
    setIsReady(true);
  };

  return isReady ? (
    <>
      <NavigationContainer>
        <Stack />
      </NavigationContainer>
      <StatusBar barStyle="light" />
    </>
  ) : (
    <AppLoading
      startAsync={loadAssets}
      onFinish={onFinish}
      onError={console.error}
    />
  );
}
