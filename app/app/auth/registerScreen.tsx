// App.tsx
import React, { use, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from "react-native";

export default function Register() {
  const [register, setVerifyTxt] = useState<"Registrarse" | "Verificarse">("Registrarse");

  const [name, setNombre] = useState("");
  const [lastname, setApellido] = useState("");
  const [username, setUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [user_password, setPassword] = useState("");

  const handleSignup = async () => {
    if (!name || !lastname || !username || !user_password || !email) {
      Alert.alert("Error", "Todos los campos son obligatorios");
      return;
    }

    try {
      const res = await fetch("ipDelServer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          lastname,
          username,
          user_password,
          email,

        }),
      });

      if (!res.ok) {
        throw new Error("Error en el servidor");
      }

      Alert.alert("Éxito", "Usuario registrado correctamente");

      // limpiar campos
      setNombre("");
      setApellido("");
      setUsuario("");
      setEmail("");
      setPassword("");


      // pasar a verificar
      setVerifyTxt("Verificarse");
    } catch (error: any) {
      console.error("Error en el signup:", error.message);
      Alert.alert("Error", "No se pudo registrar el usuario");
    }
  };

  return (
    <>
      {/* Register Form */}
      {register === "Registrarse" && (
        <ScrollView contentContainerStyle={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Nombre"
            value={username}
            onChangeText={setNombre}
          />
          <TextInput
            style={styles.input}
            placeholder="Apellido"
            value={lastname}
            onChangeText={setApellido}
          />
          <TextInput
            style={styles.input}
            placeholder="Usuario"
            value={username}
            onChangeText={setUsuario}
          />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            secureTextEntry
            value={user_password}
            onChangeText={setPassword}
          />
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />

          <TouchableOpacity style={styles.btn} onPress={handleSignup}>
            <Text style={styles.btnText}>Sign Up</Text>
          </TouchableOpacity>
        </ScrollView>
      )}

      {/* Verifybox */}
    </>
  );
}

const styles = StyleSheet.create({
  form: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 20,
    alignItems: "center",
    backgroundColor: "#f9f9f9",
  },
  input: {
    padding: 12,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    fontSize: 16,
    width: "100%",
    backgroundColor: "#fff",
  },
  btn: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 20,
    marginTop: 20,
    width: "100%",
    alignItems: "center",
  },
  btnText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
