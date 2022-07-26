import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Ball from "./src/Ball";

export default function App() {
  return (
    <View style={styles.container}>
      <Ball />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
