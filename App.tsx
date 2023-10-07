import React from "react";
import { SafeAreaView, Text, View, StyleSheet } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.mainEvent}>Nome do evento</Text>
        <Text style={styles.localEvent}>Sexta, 4 de Novembro de 2022.</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#131016",
  },
  container: {
    flex: 1,
    padding: 24,
  },
  mainEvent: {
    color: "#FDFCFE",
    fontSize: 24,
    fontWeight: "bold",
  },
  localEvent: {
    color: "#6B6B6B",
    fontSize: 16,
  },
});
