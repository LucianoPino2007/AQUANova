import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>© 2025 AQUANova. All rights reserved.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    width: "100%",
    backgroundColor: "#222",
    position: "absolute",
    bottom: 0,
    left: 0,
    paddingVertical: 10,
    alignItems: "center",
    zIndex: 100,
  },
  text: {
    color: "#fff",
    fontSize: 12,
  },
});
