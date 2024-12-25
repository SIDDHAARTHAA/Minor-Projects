import { useState } from 'preact/hooks'

export function CreateTodo(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    
    return(
        <div>
            <input 
                type="text" 
                placeholder="title" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <br /> 
            <input 
                type="text" 
                placeholder="description" 
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <br />
            <button onClick={() => {
                fetch("http://localhost:3000/todo", {
                    method: "POST",
                    body: JSON.stringify({
                        title: title,
                        description: description
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                .then(async function(res){
                    const json = await res.json();
                    alert('Todo added');
                    setTitle('');
                    setDescription('');
                })
            }}>Add Todo</button>
        </div>
    )
}