import './App.css';
import TodoList from './components/TodoList/TodoList';

const todoArray = [
  {
    id: 1,
    title: 'Clean up bedroom'
  },
  {
    id: 2,
    title: 'Buy some milk'
  },
  {
    id: 3,
    title: 'Jogging'
  },
  {
    id: 4,
    title: 'Learn React'
  },
  {
    id: 5,
    title: 'Doing Exercises'
  },
]

function App() {


  return (
    <div className="App">

      <TodoList todos={todoArray} />
    </div>
  );
}

export default App;
