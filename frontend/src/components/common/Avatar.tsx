import React from "react";
import { Image, StyleSheet, View } from "react-native";

import { colors } from "../../theme/colors";

type AvatarProps = {
  imageUrl?: string;
  size?: number;
};

export default function Avatar({
  imageUrl,
  size = 56,
}: AvatarProps) {
  return (
    <View
      style={[
        styles.container,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
        },
      ]}
    >
      {imageUrl ? (
        <Image
          source={{ uri: imageUrl }}
          style={{
            width: size,
            height: size,
            borderRadius: size / 2,
          }}
        />
      ) : (
        <View
          style={[
            styles.placeholder,
            {
              width: size,
              height: size,
              borderRadius: size / 2,
            },
          ]}
        >
          <View
            style={[
              styles.head,
              {
                width: size * 0.35,
                height: size * 0.35,
                borderRadius: size * 0.175,
              },
            ]}
          />

          <View
            style={[
              styles.body,
              {
                width: size * 0.55,
                height: size * 0.3,
                borderRadius: size * 0.275,
              },
            ]}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primaryLight,
    overflow: "hidden",
  },

  placeholder: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primaryLight,
  },

  head: {
    backgroundColor: colors.primary,
    marginBottom: 4,
  },

  body: {
    backgroundColor: colors.primary,
  },
});