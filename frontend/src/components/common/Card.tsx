import React, { ReactNode } from "react";
import { StyleSheet, View } from "react-native";

import { colors } from "../../theme/colors";
import { spacing } from "../../theme/spacing";

type CardProps = {
  children: ReactNode;
};

export default function Card({ children }: CardProps) {
  return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: 18,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
});