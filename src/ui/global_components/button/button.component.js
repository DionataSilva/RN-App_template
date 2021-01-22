import React from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import colors from '~/ui/global_styles/colors'

export const ButtonComponent = ({
  onClick,
  color = colors.gray3,
  title,
  style,
  disabled
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={onClick}
      >
        <Text>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: "center",
    paddingHorizontal: 10
  },
  button: {
    alignItems: "center",
    justifyContent: 'center',
    height: 50,
    backgroundColor: colors.gray3,
    padding: 10,
    borderRadius: 15
  },
});