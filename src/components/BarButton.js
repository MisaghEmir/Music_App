import { StyleSheet, Text, View,Pressable } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  FontAwesome,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import MusicPlayer from "./MusicPlayer";
import { useNavigation } from "@react-navigation/core";

const BarButton = () => {
  const navigator = useNavigation();
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
        <Pressable style={styles.item} 
         onPress={() => navigator.navigate("Home")}>
          <MaterialIcons name="home-filled" size={24} color="#bababa" />
          <Text
            style={{
              color:"#bababa",
              fontSize: 11,
              fontWeight: "900",
              marginTop: 5,
            }}
          >
            Home
          </Text>
        </Pressable>
        <View style={styles.item}>
          <FontAwesome name="search" size={24} color="#bababa"  />
          <Text
            style={{
              color:"#bababa",
              fontSize: 11,
              fontWeight: "900",
              marginTop: 5,
            }}
          >
            Search
          </Text>
        </View>
        <View style={styles.item}>
          <MaterialIcons name="video-collection" size={24} color="#fff"  />
          <Text
            style={{
              color: "#fff",
              fontSize: 11,
              fontWeight: "900",
              marginTop: 5,
            }}
          >
            Library
          </Text>
        </View>
        <View style={styles.item}>
          <Ionicons name="person-outline" size={24} color="#bababa"  />
          <Text
            style={{
              color:"#bababa",
              fontSize: 11,
              fontWeight: "900",
              marginTop: 5,
            }}
          >
            Profile
          </Text>
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
    elevation: 5,
    borderRadius: 0,
    borderWidth: 0,
    borderColor: "#000",
    shadowOpacity: 0,
    height: 80,
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
