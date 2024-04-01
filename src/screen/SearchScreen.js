import { StyleSheet, Text, View, SafeAreaView, ScrollView, TextInput } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const SearchScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tapbar}>
        <View>
          <Text
            style={styles.logo}
            onPress={() => navigation.navigate("Single")}
          >
            Search
          </Text>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="What do you want to listen to?" />
        <View style={styles.icon}>
            <Text style={{fontWeight: "100"}}>

        <FontAwesome name="search" size={24} style={{fontWeight: "100"}} color={"#000"} />
            </Text>
        </View>
      </View>
      <View>
        <Text
          style={{
            color: "#fff",
            fontSize: 16,
            fontWeight: "700",
          }}
        >
          Browse all
        </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.main}>
        
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#000",
    flex: 1,
  },
  tapbar: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 35,
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "700",
  },
  inputContainer: {
    position: "relative",
    marginVertical: 15,
    marginTop: 20,
    alignItems: "center"
  },
  icon: {
    position: "absolute",
    top: 0,
    left: 0,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    paddingHorizontal: 10
  },
  input: {
    backgroundColor: "#ffffff",
    width: "100%",
    paddingVertical: 8,
    paddingHorizontal: 40,
    fontSize: 16,
    borderRadius: 4
  }
});
