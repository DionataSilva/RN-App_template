import { Dimensions } from 'react-native'
import styled from 'styled-components'

const windowDimension = (Dimensions.get('window').height * 0.11).toFixed(0)
const _width = (windowDimension * (1950 / 662)).toFixed(0)

export const Container = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme: { padding } }) => padding.lg};
  background: ${({ theme: { colors } }) => colors.primary1};
`;

export const Logo = styled.Image`
  height: ${windowDimension};
  width: ${_width};
  margin-top: ${windowDimension};
  margin-bottom: ${windowDimension};
`;

export const Text = styled.Text`
  font-weight: bold;
  text-align: center;
  color: ${({ theme: { colors } }) => colors.light2};
  font-size: ${({ theme: { fontsize } }) => fontsize.md};
`;

export const Error = styled.Text`
  text-align: center;
  color: ${({ theme: { colors } }) => colors.error};
  font-size: ${({ theme: { fontsize } }) => fontsize.sm};
`;

export const Form = styled.View`
  align-items: center;
  margin: ${({ theme: { margin } }) => margin.lg};
  width: 100%;
`;