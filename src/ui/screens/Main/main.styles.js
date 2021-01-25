import { Dimensions } from 'react-native'
import styled from 'styled-components'
import colors from '~/ui/global_styles/colors'

const windowDimension = Dimensions.get('window').height * 0.11
const _width = windowDimension * (1950 / 662)

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: ${colors.rocket};
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
  color: ${colors.gray4};
  font-size: 22px;
`;

export const ErrorText = styled.Text`
  text-align: center;
  color: ${colors.red};
  font-size: 14px;
`;

export const FormContainer = styled.View`
  align-items: center;
  padding: 15px;
  width: 100%;
`;