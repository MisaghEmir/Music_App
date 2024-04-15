import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  Entypo,
  MaterialCommunityIcons,
  Feather,
  Ionicons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";

function Topbar() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.logo} onPress={() => navigation.navigate("Single")}>
          KurdiSong
        </Text>
      </View>
      <View style={styles.search}>
        <Text>
          <Ionicons name="notifications-outline" size={27} color={"#fff"} />
        </Text>
      <Text onPress={() => navigation.navigate("Recent")}>
        <MaterialCommunityIcons
          name="progress-clock"
          size={27}
          color={"#fff"}
        />
      </Text>
      </View>
    </View>
  );
}

export default Topbar;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 35,
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  logo: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "700",
  },
  search: {
    flexDirection: "row",
    alignItems: "center",
     gap: 20,
  }
});
