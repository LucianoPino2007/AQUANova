import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Image, Text } from "react-native";
import React, { useState } from "react";
import Header from "../shared/header/header";
import Footer from "../shared/footer/footer";

export default function Main() {
  const [selected, setSelected] = useState("");

  const renderContent = () => {
    switch (selected) {
      case "Configuracion":
        return <Text>Pantalla de Perfil en desarrollo</Text>;
      case "Historial":
        return <Text>Pantalla de Perfil en desarrollo</Text>;
      case "Contacto":
        return <Text>Pantalla de Perfil en desarrollo</Text>;
      case "Panel":
        return <Text>Pantalla de Perfil en desarrollo</Text>;
      case "Cerrar sesión":
        return <Text>Pantalla de Perfil en desarrollo</Text>;
      default:
        return (
          <Text style={{ fontSize: 18, color: "white", marginTop: 100 }}>
            Selecciona una opción del menú
          </Text>
        );
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      {/* Header que emite selección */}
      <Header onSelect={setSelected} />

      {/* Contenido dinámico */}
      <View style={styles.vistas}>{renderContent()}</View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  vistas: {
    height: "200%",
    flex: 1,
    marginTop: 80, // para que no tape el header
    padding: 20,
  }, 
  container: {
    flex: 1,
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
});
