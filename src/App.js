import './App.css';
import AddToDo from './Components/AddToDo/AddToDo'
import ToDoList from './Components/ToDoList/ToDoList'


function App() {

  return (
    <div className="App">
      <h1>Todo App</h1>
      <AddToDo />
      <ToDoList />
    </div>
  );
}

export default App;
