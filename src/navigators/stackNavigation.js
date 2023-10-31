import React, { useState } from "react";
import Welcome from "../screens/Welcome";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import Home from "../screens/Home";
import pexelsLogo from "../../assets/pexels-logo.jpg";
import { NavigationContainer } from "@react-navigation/native";
import ImageScreen from "../screens/ImageScreen";

import { AntDesign } from "@expo/vector-icons";

const StackNavigation = () => {
  const Stack = createStackNavigator();
  const [openSearch, setOpenSearch] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          options={{
            headerLeft: () => (
              <Image source={pexelsLogo} style={styles.pexelLogo} />
            ),
            headerRight: () => (
              <Text
                onPress={() => setOpenSearch(!openSearch)}
                style={styles.textSearch}
              >
                {openSearch ? (
                  <AntDesign name="close" size={24} color="#fff" />
                ) : (
                  <AntDesign name="search1" size={24} color="#fff" />
                )}
              </Text>
            ),
            title: "BUG FILMS",
            headerTintColor: "#FFFFFF",
            headerStyle: {
              backgroundColor: "#132332",
            },
          }}
        >
          {(props) => <Home {...props} openSearch={openSearch} />}
        </Stack.Screen>
        <Stack.Screen
          name="ImageScreen"
          component={ImageScreen}
          options={{
            title: "BUG FILMS",
            headerTintColor: "#FFFFFF",
            headerStyle: {
              backgroundColor: "#132332",
            },
          }}
        />
      </Stack.Navigator>
      <StatusBar />
    </NavigationContainer>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({
  pexelLogo: {
    width: 40,
    height: 40,
    borderRadius: 25,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  textSearch: {
    color: "#FFFFFF",
    // fontSize: 20,
    marginHorizontal:20,
  },
});
