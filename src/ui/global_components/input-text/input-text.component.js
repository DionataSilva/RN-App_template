import React from "react"
import { getTheme } from "~/utils"

import {
  Container,
  InputText,
  EyeIcon
} from './input-text.styles'

export const InputTextComponent = ({
  placeholder = 'default',
  onChangeText,
  secureTextEntry = false,
  textContentType = 'emailAddress',
  value,
  onSubmit
}) => {

  const [visible, setVisibility] = React.useState(false)
  const { colors } = getTheme()

  return (
    <Container>
      <InputText
        contextMenuHidden
        onSubmitEditing={onSubmit}
        textBreakStrategy={'simple'}
        autoCapitalize={'none'}
        autoCorrect={false}
        selectionColor={colors.gray3}
        secureTextEntry={visible}
        textContentType={textContentType}
        placeholderTextColor={colors.gray3}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
      />

      {secureTextEntry && <EyeIcon IsVisiblePassword={visible} onPress={() => setVisibility(!visible)} />}
    </Container>
  )
}
