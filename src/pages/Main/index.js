import React, {Component} from 'react';
import {Keyboard} from 'react-native';

import {
  Container,
  Form,
  Input,
  SubmitButton,
  TaskList,
  Task,
  Name,
  DeleteButton,
} from './styles';

export default class Main extends Component {
  state = {
    newTask: '',
    tasks: [],
  };

  handleAdd = () => {
    const {newTask, tasks} = this.state;

    this.setState({
      tasks: [
        ...tasks,
        {
          id: Math.random(),
          task: newTask,
        },
      ],
      newTask: '',
    });

    Keyboard.dismiss();
  };

  handleDelete = task => {
    const {tasks} = this.state;

    tasks.splice(tasks.indexOf(task), 1);

    this.setState({
      tasks,
    });
  };

  render() {
    const {newTask, tasks} = this.state;

    return (
      <Container>
        <Form>
          <Input
            value={newTask}
            placeholder="Digite a nova tarefa"
            placeholderTextColor="rgba(255, 255, 255, 0.5)"
            onChangeText={text => this.setState({newTask: text})}
          />
          <SubmitButton title="Add" onPress={this.handleAdd} />
        </Form>

        <TaskList
          data={tasks}
          keyExtractor={task => task.id}
          renderItem={({item}) => (
            <Task>
              <Name>{item.task}</Name>
              <DeleteButton
                title="Excluir"
                onPress={() => this.handleDelete(item)}
              />
            </Task>
          )}
        />
      </Container>
    );
  }
}

Main.navigationOptions = {
  title: 'Tasks',
};
