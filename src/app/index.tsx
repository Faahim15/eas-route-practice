import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function () {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Coffee Shop!</Text>
      <Link style={styles.text} href="/secondScreen">
        Push to /second
      </Link>
      <Link style={styles.text} href="/thirdScreen" push>
        Push to /third
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 90,
    backgroundColor: "#ccc",
  },
  text: {
    textAlign: "center",
    marginVertical: "auto",
    marginHorizontal: "auto",
    color: "#000",
    fontSize: 20,
    fontWeight: 700,
  },
});
