import React from "react";
import { Alert, SafeAreaView, StyleSheet, Text } from "react-native";

import Button from "./src/components/common/Button";
import Card from "./src/components/common/Card";
import { colors } from "./src/theme/colors";
import { spacing } from "./src/theme/spacing";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome to Peppi 🐻</Text>

      <Card>
        <Text style={styles.cardTitle}>Your Journey</Text>
        <Text style={styles.cardText}>
          This is a reusable Peppi card.
        </Text>
      </Card>

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

  cardTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: colors.text,
    marginBottom: spacing.sm,
  },

  cardText: {
    fontSize: 15,
    color: colors.textSecondary,
  },
});