import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./src/navigators/StackNavigator";
import { PlayContext } from "./src/context/PlayContext";
import { Provider } from "react-redux";
import store from "./src/redux/Store";
import React, { Component, Fragment } from "react";

export default function App() {
  return (
    <Provider store={store}>
      <PlayContext>
        <Fragment>
          <NavigationContainer>
            <StackNavigator />
            <StatusBar style="light" backgroundColor="black" animated={true} />
          </NavigationContainer>
        </Fragment>
      </PlayContext>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
