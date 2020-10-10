import React, { useState }from 'react';
import './TodoForm.css';

const TodoForm = ({saveTodo}) => {
    // const [todos, setTodos] = useState([]);
    const [value, setValue] = useState('');

    //handle the form submission
    const onFormSubmit = async (e) => {
        e.preventDefault();
        // console.log(value);
        saveTodo({description: value});

        try {
            const body = {description: value};
            console.log(body)
            const response = await fetch('http://localhost:8000/api/v1/todos', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(body)
            });
            console.log(response);
            // Need to grab state of todos and push in new todo
            
            setValue('');
            
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
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default TodoForm;
