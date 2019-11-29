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

    //Adiciona a tarefa ao array de tarefas
    this.setState({
      tasks: [
        ...tasks,
        //Adiciono um objeto para poder criar uma chave unica pra cada tarefa
        {
          id: Math.random(),
          task: newTask,
        },
      ],
      newTask: '',
    });

    //Fecha o teclado após adicionar uma tarefa
    Keyboard.dismiss();
  };

  handleDelete = task => {
    const {tasks} = this.state;

    //Tendo criado uma chave única, evita bugs na hora de excluir

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
              {/* Por ser um objeto, precisa passar item.task */}
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
