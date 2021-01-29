import styled from 'styled-components'
import Icon from 'react-native-vector-icons/Ionicons'

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 50px;
  margin: 5px;
  padding: 15px;
  border-radius: 15px;
  border-width: 1.5px;
  color: ${({ theme: { colors } }) => colors.gray4};
  border-color: ${({ theme: { colors } }) => colors.gray4};
`;

export const InputText = styled.TextInput`
  width: 90%;
  height: 50px;
  color: ${({ theme: { colors } }) => colors.gray4};
`

export const EyeIcon = styled(Icon).attrs(({ IsVisiblePassword }) => ({
  name: IsVisiblePassword ? 'eye-off-outline' : 'eye-outline',
  size: 30,
}))`
  color: ${({ theme: { colors } }) => colors.gray4};
`;