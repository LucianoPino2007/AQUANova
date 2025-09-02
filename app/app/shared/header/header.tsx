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
        <Ionicons name="menu" size={40} color="white" />
      </Pressable>

      {/* Logo centrado */}
      <View style={styles.logoContainer}>
        <Image
          source={require("../../../assets/logoAqua.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Sidebar con slide */}
      <Aside
        visible={hamburguesa === "abierta"}
        onSelect={(item) => {
          onSelect(item); // avisamos a Main
          setHamburguesActive("cerrada"); // cerramos menú al elegir
        }}
      />
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
    backgroundColor: "#000000B2",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start", // hamburguesa a la izquierda
    paddingHorizontal: 20,
    zIndex: 2000,
  },
  logoContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    alignItems: "center", // centra horizontalmente
  },
  logo: {
    width: 140,
    height: 60,
  },
});
