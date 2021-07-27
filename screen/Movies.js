import React from "react";
import { Button, Text, View } from "react-native";

export default ({ navigation }) => (
  <View style={{ backgroundColor: "black", flex: 1 }}>
    <Text>Movies!!</Text>
    <Button title="Movie" onPress={() => navigation.navigate("Detail")} />
  </View>
);
