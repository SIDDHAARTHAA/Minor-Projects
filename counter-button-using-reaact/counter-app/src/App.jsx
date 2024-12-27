import { useState } from "react";

function App() {
  const [todos,setTodos] = useState([{
    title: "Todo 1",
    description: "Todo 1 description",
    completed: false
  },{
    title: "Todo 2",
    description: "Todo 2 description",
    completed: false
  },{
    title: "Todo 3",
    description: "Todo 3 description",  
    completed: false
  }]);

  return (
    <div>
      {todos.map((todo) => (
         <Todo title={todo.title} description={todo.description} />
      ))}
    </div>
  );
}

// Component
function Todo(props) {
  
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}

export default App;