// App.tsx
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from "react-native";

export default function Register() {
  const [register, setVerifyTxt] = useState<"Registrarse" | "Verificarse">("Registrarse");

  const [username, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [user_password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [phone_number, setPhoneNumber] = useState("");

  const handleSignup = async () => {
    if (!username || !email || !user_password || !country || !phone_number) {
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
          user_password,
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
      setEmail("");
      setPassword("");
      setCountry("");
      setPhoneNumber("");

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
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
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
            placeholder="País"
            value={country}
            onChangeText={setCountry}
          />
          <TextInput
            style={styles.input}
            placeholder="Teléfono"
            keyboardType="phone-pad"
            value={phone_number}
            onChangeText={setPhoneNumber}
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
