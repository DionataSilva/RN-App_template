import { Dimensions } from 'react-native'
import styled from 'styled-components'

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme: { colors } }) => colors.primary1}
`;

export const Text = styled.Text`
  font-size: ${({ theme: { fontsize } }) => fontsize.xl};
  font-weight: bold;
  text-align: center;
  color: ${({ theme: { colors } }) => colors.gray4};
`;
