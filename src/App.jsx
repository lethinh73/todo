import './App.css'
import { TodoItem } from './components/TodoItem'

function App() {
  return (
    <>
      <h1>Todo App</h1>
      <h2>Todo List</h2>
      <input type="text" name="add-new-task" placeholder="Add a new task" />

      <div style={{ marginTop: '20px' }}>
        <TodoItem name="Learn React" code="ABC123" />
        <TodoItem name="Learn CSS" code="XYZ456" />
      </div>
    </>
  )
}

export default App
