import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #333;
  flex-direction: column;
  padding: 30px 15px 0;
`;

export const Form = styled.View`
  flex-direction: row;
`;

export const Input = styled.TextInput`
  flex: 1;
  margin-right: 10px;
  background: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: center;
  padding: 5px 15px;
  border-radius: 4px;
  color: #fff;
`;

export const SubmitButton = styled.Button.attrs({
  color: '#7159c1',
})``;

export const TaskList = styled.FlatList.attrs({
  showVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const Task = styled.View`
  flex-direction: row;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 15px;
  border-radius: 4px;
  align-items: center;
  margin-top: 20px;
`;

export const Name = styled.Text`
  flex: 1;
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  text-transform: capitalize;
`;

export const DeleteButton = styled.Button.attrs({
  color: '#c40a23',
})``;
