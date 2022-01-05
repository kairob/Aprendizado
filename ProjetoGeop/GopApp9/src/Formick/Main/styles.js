import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.KeyboardAvoidingView.attrs({
  behavior: 'padding',
  enabled: Platform.OS === 'ios',
})`
  flex: 1;
  background: #0f198c;
  padding: 30px;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.View`
  padding: 50px;
  background: #f5f5f5;
  border-top-left-radius: 5px;
  border-top-right-radius: 100px;
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 5px;

  box-shadow: 5px 20px 10px rgba(0, 0, 0, 0.1);
`;

export const Label = styled.Text`
  color: #676767;
  font-weight: 500;
  margin: 5px 0;
`;

export const Input = styled.TextInput`
  height: 40px;
  width: 240px;
  /* border: 1px solid #c8c8c8; */
  border-bottom-width: 1;
  border-color: #c8c8c8;
  border-radius: 4px;
  color: #333;
  /* background: rgba(255, 255, 255, 0.9); */
`;

export const SubmitButton = styled.TouchableOpacity`
  height: 50px;
  width: 250px;
  background: #141738;
  margin: 10px 0;
  border-radius: 4px;
  box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.1);
  opacity: 0.9;

  align-items: center;
  justify-content: center;
`;

export const SubmitButtonText = styled.Text`
  color: #f5f5f5;
  font-weight: bold;
  font-size: 16px;
`;

export const Error = styled.Text`
  color: #ff8788;
  font-weight: 500;
  margin: 5px 0;
`;

export const Title = styled.Text`
  color: #141738;
  opacity: 0.8;
  font-weight: 500;
  margin: 20px 0;
  font-size: 32px;
`;
