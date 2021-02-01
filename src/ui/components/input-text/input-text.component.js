import React, { useState } from "react"
import { useTheme } from "~/utils"

import * as SC from './input-text.styles'

export const InputTextComponent = ({
  color,
  placeholder = 'default',
  onChangeText,
  secureTextEntry = false,
  textContentType = 'emailAddress',
  value,
  onSubmit
}) => {

  const [visible, setVisibility] = useState(secureTextEntry)
  const { colors } = useTheme()

  return (
    <SC.Container color={color}>
      <SC.InputText
        color={color}
        contextMenuHidden
        onSubmitEditing={onSubmit}
        textBreakStrategy={'simple'}
        autoCapitalize={'none'}
        autoCorrect={false}
        selectionColor={color ? color : colors.gray3}
        secureTextEntry={visible}
        textContentType={textContentType}
        placeholderTextColor={color ? color : colors.gray3}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
      />

      {secureTextEntry && <SC.EyeIcon color={color} IsVisiblePassword={visible} onPress={() => setVisibility(!visible)} />}
    </SC.Container>
  )
}
