import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  Entypo,
  FontAwesome,
  Feather,
  MaterialIcons,
} from "@expo/vector-icons";
import MusicPlayer from "./MusicPlayer";

const BarButton = () => {
  return (
    <>
      <MusicPlayer />
      <LinearGradient
        colors={[
          "rgba(0,0,0,0.5)",
          "rgba(0,0,0,0.6)",
          "rgba(0,0,0,0.7)",
          "rgba(0,0,0,0.8)",
          "rgba(0,0,0,0.9)",
        ]}
        style={styles.container}
      >
        <View style={styles.item}>
          <MaterialIcons name="home-filled" size={30} color="#fff" />
          <Text style={styles.itemText}>Home</Text>
        </View>
        <View style={styles.item}>
          <FontAwesome name="search" size={28} color="#fff" />
          <Text style={styles.itemText}>Search</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.itemText}>Bar</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.itemText}>Bar</Text>
        </View>
      </LinearGradient>
    </>
  );
};

export default BarButton;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    position: "absolute",
    bottom: 0,
    left: 0,
    zIndex: 999999,
    flexDirection: "row",
    overflow: "hidden",
  },
  item: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    paddingVertical: 14,
  },
  itemText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "700",
  },
});
