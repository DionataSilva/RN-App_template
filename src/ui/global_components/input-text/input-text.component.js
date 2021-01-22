import React from "react"
import { TextInput } from "react-native-gesture-handler"
import colors from '~/ui/global_styles/colors'

export const InputTextComponent = ({
  placeholder = 'default',
  onChangeText,
  secureTextEntry = false,
  textContentType = 'emailAddress',
  value
}) => {

  return (
    <TextInput
      secureTextEntry={secureTextEntry}
      textContentType={textContentType}
      placeholderTextColor={colors.gray3}
      placeholder={placeholder}
      style={{
        width: '100%',
        height: 50,
        borderColor: colors.gray3,
        borderRadius: 15,
        borderWidth: 2,
        margin: 5,
      }}
      onChangeText={onChangeText}
      value={value}
    />
  )
}
