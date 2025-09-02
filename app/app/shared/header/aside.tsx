import React, { useEffect, useRef } from "react";
import { StyleSheet, Text, Animated, Pressable, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  visible: boolean;
  onSelect?: (item: string) => void; // callback opcional al presionar
};

export default function Aside({ visible, onSelect }: Props) {
  const slideAnim = useRef(new Animated.Value(-220)).current; // arranca fuera de la pantalla

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: visible ? 0 : -220, // si está abierto = 0, si no = afuera
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [visible]);

  return (
    <Animated.View
      style={[
        styles.container,
        { transform: [{ translateX: slideAnim }] },
      ]}
    >
      <Text>Opciones</Text>
      {/* Perfil */}
      <Pressable style={styles.item} onPress={() => onSelect?.("perfil")}>
        <Ionicons name="person-outline" size={24} color="white" />
        <Text style={styles.text}>Perfil</Text>

      </Pressable>

      {/* Lotes */}
      <Pressable style={styles.item} onPress={() => onSelect?.("lotes")}>
        <Ionicons name="grid-outline" size={24} color="white" />
        <Text style={styles.text}>Lotes</Text>
      </Pressable>

      {/* Estaca */}
      <Pressable style={styles.item} onPress={() => onSelect?.("estaca")}>
        <Ionicons name="location-outline" size={24} color="white" />
        <Text style={styles.text}>Estaca</Text>
        <Animated.View style={styles.dot} />
      </Pressable>

      {/* Historial */}
      <Pressable style={styles.item} onPress={() => onSelect?.("historial")}>
        <Ionicons name="document-text-outline" size={24} color="white" />
        <Text style={styles.text}>Historial SECCION EN DESARROLLO</Text>
      </Pressable>

      {/* Login */}
      <Pressable style={styles.item} onPress={() => onSelect?.("login")}>
        <Ionicons name="document-text-outline" size={24} color="white" />
        <Text style={styles.text}>Login</Text>
      </Pressable>
    </Animated.View>
  );
}

const HEADER_HEIGHT = 80; // el mismo valor que usaste en Header
const { height } = Dimensions.get("window"); // para asegurar alto completo

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    height, // usa toda la pantalla
    width: 220,
    backgroundColor: "#798679",
    marginTop: HEADER_HEIGHT,
    paddingHorizontal: 15,
    paddingVertical: 20,
    zIndex: 3000,
    elevation: 10,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
  },
  text: {
    color: "white",
    fontSize: 18,
    marginLeft: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "red",
    marginLeft: 6,
  },
});
