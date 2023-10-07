import React from "react";
import { SafeAreaView, Text, View, StyleSheet } from "react-native";
import { Home } from "./src/screens/Home";

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#131016",
  },
});
