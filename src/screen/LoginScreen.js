import { StyleSheet, Text, View, TextInput, Pressable,Animated } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useDispatch } from "react-redux";

const LoginScreen = () => {
    const [emailFocus, setEmailFocus] = useState(false)
    const [passwordFocus, setPasswordFocus] = useState(false)
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: "#fff",
          marginTop: 150,
          textAlign: "center",
          fontSize: 45,
          fontWeight: "900",
        }}
      >
        Login
      </Text>
      <Text
        style={{
          color: "#fff",
          marginTop: 15,
          textAlign: "center",
          fontSize: 18,
          fontWeight: "600",
        }}
      >
        Contunio to accont
      </Text>
      <View style={{marginTop: 50}}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onFocus={() => {
              dispatch({
                type: "hidden",
              });
            }}
            onBlur={() => {
              dispatch({
                type: "show",
              });
            }}
          />
          <Animated.View style={styles.icon}>
            <Text style={{ fontSize: 15, fontWeight: "900",color: "#fff" }}>Email</Text>
          </Animated.View>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onFocus={() => setPasswordFocus(true)}
            onBlur={() => setPasswordFocus(false)}
          />
          <View style={[styles.icon,{top: passwordFocus ? -25 : 0, backgroundColor: passwordFocus ? "rgb(25,25,25)" : "transparent",}]}>
            <Text style={{ fontSize: 15, fontWeight: "900",color: "#fff" }}>Password</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", gap: 20,  paddingHorizontal: 20,marginTop: 50}}>
            <Pressable>
            <Text style={{ fontSize: 15, fontWeight: "900",  color: "#fff", }}>
                Login</Text>
            </Pressable>
            <Pressable>
            <Text style={{ fontSize: 15, fontWeight: "900",  color: "#fff", }}>
                Create a account
            </Text>
            </Pressable>
        </View>
      </View>
      <StatusBar
        style="light"
        backgroundColor="rgb(25,25,25)"
        animated={true}
      />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 70,
    paddingTop: 0,
    backgroundColor: "rgb(25,25,25)",
    flex: 1,
    position: "relative",
  },
  inputContainer: {
    position: "relative",
    marginVertical: 15,
    paddingHorizontal: 0,
    marginTop: 20,
    alignItems: "center",
    width: "100%",
  },
  icon: {
    position: "absolute",
    top: 0,
    left: 30,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    paddingHorizontal: 10,
  },
  input: {
    width: "90%",
    paddingVertical: 12,
    paddingHorizontal: 20,
    fontSize: 16,
    borderRadius: 7,
    borderColor: "rgb(220,220,220)",
    borderWidth: 0.5
  },
});
