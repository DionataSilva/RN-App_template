import { Dimensions } from 'react-native'
import styled from 'styled-components'

const windowDimension = (Dimensions.get('window').height * 0.11).toFixed(0)
const _width = (windowDimension * (1950 / 662)).toFixed(0)

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: ${({ theme }) => theme.colors.background};
`;

export const Logo = styled.Image`
  height: ${windowDimension};
  width: ${_width};
  margin-top: ${windowDimension};
  margin-bottom: ${windowDimension};
`;

export const StyledText = styled.Text`
  font-weight: bold;
  text-align: center;
  color: ${props => props.theme.colors.gray4};
  font-size: ${({ theme }) => theme.fontsize.medium};
`;

export const ErrorText = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.colors.red};
  font-size: ${({ theme }) => theme.fontsize.small};
`;

export const FormContainer = styled.View`
  align-items: center;
  padding: 15px;
  width: 100%;
`;