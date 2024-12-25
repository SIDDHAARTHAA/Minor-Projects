import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import {CreateTodo} from './components/createTodo';
import {Todos} from './components/todos';

export function App() {
  const [todos,setTodos] = useState([])
  
  fetch('http://localhost:3000/todos')
  .then(async function(res){
    const json = await res.json();  
    setTodos(json.todos);
  })

  return (
    <div>
      <CreateTodo />
      <Todos todos={todos}/>
    </div>
  ) 
}
