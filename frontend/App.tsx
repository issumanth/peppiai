import React, { Alert, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import Avatar from "./src/components/common/Avatar";
import Button from "./src/components/common/Button";
import Card from "./src/components/common/Card";
import Header from "./src/components/common/Header";
import BottomTabBar from "./src/components/navigation/BottomTabBar";

import { colors } from "./src/theme/colors";
import { spacing } from "./src/theme/spacing";

export default function App() {
  const [activeTab, setActiveTab] = useState("Explore");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
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
      </View>

      <BottomTabBar
        activeTab={activeTab}
        onTabPress={(tab) => setActiveTab(tab)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  content: {
    flex: 1,
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