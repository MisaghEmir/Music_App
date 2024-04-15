import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/core";

const SearchBox = ({ item, color }) => {
  const navigator = useNavigation();
  console.log(color);
  return (
    <View
      style={{
        width: "100%",
        height: 105,
        borderRadius: 7,
        backgroundColor: color,
        position: "relative",
        overflow: "hidden",
        borderColor: "rgba(255,255,255,0.0)",
        shadowColor: "#fff",
      }}
    >
      <Pressable
        onPress={() => navigator.navigate("SearchBoxScreen", { item })}
      >
        <Text
          style={{
            marginTop: 10,
            fontSize: 17,
            fontWeight: "900",
            color: "#fff",
            marginLeft: 10,
            width: "60%",
          }}
          numberOfLines={2}
        >
          {item.name}
        </Text>
      </Pressable>
        <View
          style={{
            position: "absolute",
            right: -20,
            bottom: -0,
            transform: "rotate(20deg)",
            shadowColor: "#fff",
          }}
        >
          <Image
            source={{ uri: item.image }}
            style={{
              width: 80,
              height: 85,
              borderRadius: 11,
              shadowColor: "#fff",
            }}
          />
        </View>
    </View>
  );
};

export default SearchBox;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 100,
    borderRadius: 8,
    backgroundColor:
      "#" + (((1 << 24) * Math.random()) | 0).toString(16).padStart(6, "0"),
  },
});
