import React from "react"
import { TextInput, View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import colors from '~/ui/global_styles/colors'

export const InputTextComponent = ({
  placeholder = 'default',
  onChangeText,
  secureTextEntry = false,
  textContentType = 'emailAddress',
  value,
  onSubmit,
}) => {

  const [visible, setVisibility] = React.useState(false)
  const icon = !visible ? 'eye-outline' : 'eye-off-outline'

  return (
    <View style={styles.t}>
      <TextInput
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
        style={{
          width: '90%',
          height: 50,
          color: colors.gray3,
        }}
        onChangeText={onChangeText}
        value={value}
      />
      {secureTextEntry && <Icon
        name={icon}
        color={colors.gray3}
        onPress={() => setVisibility(!visible)}
        size={30}
      />}
    </View>
  )
}

const styles = StyleSheet.create({
  t: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 50,
    borderColor: colors.gray3,
    color: colors.gray3,
    borderRadius: 15,
    borderWidth: 2,
    margin: 5,
    padding: 15,
  },
})
