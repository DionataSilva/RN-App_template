import styled from 'styled-components'

export const ButtonContainer = styled.View`
  flex:1;
  width: 100%;
  justify-content: center;
  padding: 10px 0;
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: 50px;
  padding: 10px;
  border-radius: 14px;
  background-color: ${({ theme, color }) => color ? color : theme.colors.gray3};
`;

export const ButtonText = styled.Text`
  color: ${({ theme, color }) => color ? color : 'black'};
`;