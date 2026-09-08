import React, { Alert } from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";

import Avatar from "./src/components/common/Avatar";
import Button from "./src/components/common/Button";
import Card from "./src/components/common/Card";
import Header from "./src/components/common/Header";
import { colors } from "./src/theme/colors";
import { spacing } from "./src/theme/spacing";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Self Exploring"
        subtitle="Take a moment to understand yourself."
      />

      <Avatar size={80} />

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
    padding: spacing.lg,
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