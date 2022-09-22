import React, { Component } from 'react';
// import MyForm from './components/MyForm';
// import authContext from './context/auth-context';
// import AppBar from './components/AppBar';
// import avatar from './avatar.png';
import TodoList from './components/TodoList';
import initialTodos from './todos.json'; 

// для MyForm
// export default class App extends Component {
//   state = {
//     isLoggedIn: false,
//     user: { name: 'Манго', avatar },
//     onLogIn: () => this.setState({ isLoggedIn: true }),
//     onLogOut: () => this.setState({ isLoggedIn: false }),
//   };

//   render() {
//     return (
//       <authContext.Provider value={this.state}>
//         <div>
//           <AppBar />
//         </div>
//       </authContext.Provider>
//     );
//   }
// }

// для TodoList
// делаем Арр классом, обьявляем state
class App extends Component {
  state = {
    todos: initialTodos,
  };

// метод обновления state
  deleteTodo = todoId => {
    this.setState(prevState => ({ // заменяем предыдущее состояние
//берём предыдущие тудушки(prevState.todos) для каждой из них проверяю id(выбрасываем элемент id которого совпадает ) 
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state; //деструктуризировала свойства todos

    const totalTodoCount = todos.length;
    const completedTodoCount = todos.reduce(//используем .reduce для подсчитывания данных
      (total, todo) => (todo.completed ? total + 1 : total),
      0,
    );

    return (
      <>
        <h1>Состояние компонента</h1>

        {/* <Counter initialValue={10} /> */}
        {/* <Dropdown /> */}
        {/* <ColorPicker options={colorPickerOptions} /> */}

        <div>
          <p>Общее кол-во: {totalTodoCount}</p>
          <p>Кол-во выполненных: {completedTodoCount}</p>
        </div>

        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
      </>
    );
  }
}

export default App;