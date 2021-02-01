import React from "react"
import * as SC from './button.styles'

export const ButtonComponent = ({
  onClick,
  backgroundColor,
  TextColor,
  title,
  disabled
}) => {
  return (
    <SC.Container>
      <SC.Button
        disabled={disabled}
        color={backgroundColor}
        onPress={onClick}
      >
        <SC.Text color={TextColor}>{title}</SC.Text>
      </SC.Button>
    </SC.Container>
  )
}