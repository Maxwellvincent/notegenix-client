import React, { useState }from 'react';
import './InputTodos.css';

const InputTodo = () => {
    // const [todos, setTodos] = useState([]);
    const [description, setDescription] = useState('');
    
  
    //handle the form submission
    const onFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const body = {description};
            const response = await fetch('http://localhost:8000/api/v1/todos', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(body)
            });
            console.log(response);
            // Need to grab state of todos and push in new todo
            setDescription("");
            console.log(body);
           window.location = ("/");
        } catch (error) {
            console.log(error.message);
        }
    }



    return (
        <div>
            <h1>Input Todo</h1>
            
            <form onSubmit={onFormSubmit}>
                <input type="text" 
                    placeholder="add todo" 
                    className="form-control"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default InputTodo;
