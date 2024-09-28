import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";

const ListMusic = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", gap: 10 }}>
        <View>
          <Image source={{ uri: item.image }} style={styles.image} />
        </View>
        <View style={{ justifyContent: "center" }}>
          <Text style={{ color: "#fff", fontSize: 15, fontWeight: "700" }}>
            {item.name}
          </Text>
          <View style={{ flexDirection: "row", gap: 4, marginTop: 5 }}>
            <Text
              style={{
                color: "#000",
                fontSize: 9,
                fontWeight: "900",
                backgroundColor: "gray",
                padding: 1,
                paddingHorizontal: 3,
                borderRadius: 3,
              }}
            >
              LYRICS
            </Text>
            <Text style={{ color: "#bababa", fontSize: 11 }}>
              {item.singer}
            </Text>
          </View>
        </View>
      </View>
      <View>
        <Entypo name="dots-three-vertical" size={17} color={"#bababa"} />
      </View>
    </View>
  );
};

export default ListMusic;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
  },
  image: {
    width: 57,
    height: 57,
    borderWidth: 1,
    borderRadius: 2,
    objectFit: "cover",
    borderColor: "rgba(255,255,255,0.1)",
  },
});
