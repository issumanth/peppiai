import React from "react";
import { Alert, SafeAreaView, StyleSheet, Text } from "react-native";

import Button from "./src/components/common/Button";
import { colors } from "./src/theme/colors";
import { spacing } from "./src/theme/spacing";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome to Peppi 🐻</Text>

      <Button
        title="Let's Begin"
        onPress={() => Alert.alert("Peppi", "Button works!")}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: "center",
    padding: spacing.lg,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    color: colors.text,
    textAlign: "center",
    marginBottom: spacing.lg,
  },
});