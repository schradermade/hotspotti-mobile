import React from "react";
import { StyleSheet, Text } from "react-native";
import { colors, fontSize, spacing } from "../../theme/theme";

const Downloads = () => {
  return (
    <Text style={styles.text}>Downloads section coming soon!</Text>
  )
}

const styles = StyleSheet.create({
  text: {
    color: colors.darkFont,
    fontSize: fontSize.medium,
    paddingTop: spacing.xxxlarge,
    alignSelf: 'center'
  }
})

export default Downloads;