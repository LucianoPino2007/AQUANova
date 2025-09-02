import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Image, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import Aside from "./aside";

type Props = {
  onSelect: (item: string) => void; // callback recibido desde Main
};

export default function Header({ onSelect }: Props) {
  const [hamburguesa, setHamburguesActive] = useState<
    "abierta" | "cerrada"
  >("cerrada");

  return (
    <View style={styles.container}>
  <StatusBar style="auto" />

  {/* Botón Hamburguesa */}
  <Pressable
    onPress={() =>
      setHamburguesActive((prev) =>
        prev === "abierta" ? "cerrada" : "abierta"
      )
    }
  >
    <Ionicons name="menu" size={40} color="black" />
  </Pressable>

  {/* Logo */}
  <View style={{ flex: 1, alignItems: "center" }}>
    <Image
      source={require("../../../assets/logoAqua.png")}
      style={styles.logo}
      resizeMode="contain"
    />
  </View>

  {/* Espacio vacío para balancear el flex y que el logo quede centrado */}
  <View style={{ width: 40 }} />
</View>

  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: "#DEEEFA",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    zIndex: 2000,
  },
  logo: {
    width: 140,
    height: 32,
  },
});
