export function Todos({todos, markAsCompleted}){ 
    return <div>
        {todos.map(function(todo){
            return <div>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                {todo.completed ? (
                    <h2>Completed</h2>
                ) : (
                    <button onClick={() => markAsCompleted(todo._id)}>
                        Mark as Completed
                    </button>
                )}
            </div>
        })}
    </div>
}
    