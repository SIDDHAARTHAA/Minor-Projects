export function Todos({todos}){
    return <div>
        {todos.map(function(todo){
                return <div>
                    <h1>{todo.title}</h1>
                    <h2>{todo.description}</h2>
                    <h2>{todo.completed == true ? "Completed" : "Mark as Completed" }</h2>
                </div>
            })}
    </div>
}
    