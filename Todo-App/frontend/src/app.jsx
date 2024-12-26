import { useState, useEffect } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import {CreateTodo} from './components/createTodo';
import {Todos} from './components/todos';

export function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/todo")
      .then(async function(res) {
        const json = await res.json();
        setTodos(json);
      })
  }, []);

  function markAsCompleted(id) {
    fetch("http://localhost:3000/complete", {
      method: "PUT",
      body: JSON.stringify({
        id: id
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(async function(res) {
        const json = await res.json();
        // Refresh the todos list
        fetch("http://localhost:3000/todo")
          .then(async function(res) {
            const json = await res.json();
            setTodos(json);
          })
      })
  }

  return (
    <div>
      <CreateTodo /> 
      <Todos todos={todos} markAsCompleted={markAsCompleted}/>
    </div>
  ) 
}
