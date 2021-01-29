import React from "react"
import {
  ButtonContainer,
  Button,
  ButtonText
} from './button.styles'

export const ButtonComponent = ({
  onClick,
  backgroundColor,
  TextColor,
  title,
  disabled
}) => {
  return (
    <ButtonContainer>
      <Button
        disabled={disabled}
        color={backgroundColor}
        onPress={onClick}
      >
        <ButtonText color={TextColor}>{title}</ButtonText>
      </Button>
    </ButtonContainer>
  )
}