import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { colors } from "../../theme/colors";
import { spacing } from "../../theme/spacing";

type Tab = {
  label: string;
  icon: string;
};

type BottomTabBarProps = {
  activeTab: string;
  onTabPress: (tab: string) => void;
};

const tabs: Tab[] = [
  {
    label: "Explore",
    icon: "🏠",
  },
  {
    label: "AI Chat",
    icon: "💬",
  },
  {
    label: "Skills",
    icon: "🎯",
  },
  {
    label: "Profile",
    icon: "👤",
  },
];

export default function BottomTabBar({
  activeTab,
  onTabPress,
}: BottomTabBarProps) {
  return (
    <View style={styles.container}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.label;

        return (
          <Pressable
            key={tab.label}
            onPress={() => onTabPress(tab.label)}
            style={[
              styles.tab,
              isActive && styles.activeTab,
            ]}
          >
            <Text style={styles.icon}>{tab.icon}</Text>

            <Text
              style={[
                styles.label,
                isActive && styles.activeLabel,
              ]}
            >
              {tab.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.surface,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.xs,
  },

  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: spacing.sm,
    borderRadius: 14,
  },

  activeTab: {
    backgroundColor: colors.primaryLight,
  },

  icon: {
    fontSize: 22,
    marginBottom: 4,
  },

  label: {
    fontSize: 12,
    fontWeight: "500",
    color: colors.textSecondary,
  },

  activeLabel: {
    color: colors.primary,
    fontWeight: "700",
  },
});