import React, { useState, useEffect }from 'react';
import './TodoForm.css';

const TodoForm = ({addTodo, editTask, editTodo}) => {
    // const [todos, setTodos] = useState([]);
    const [value, setValue] = useState('');

    //handle the form submission
    const onFormSubmit = async (e) => {
        e.preventDefault();
        if(!editTodo){
            addTodo({description: value});
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
        } else {
            //This means we are editing the todo task
            editTask(value,editTodo.id)
            // editTask(editTodo.description,editTodo.id)
            console.log(editTodo);
        }
        console.log(value);
        

        
    }

    useEffect(() => {
        if(editTodo){
            console.log(editTodo);
            setValue(editTodo.description);
            console.log(editTodo);
        } else {
            setValue('');
        }
    }, [editTodo])


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
                <button type="submit">{editTodo ? 'Edit Task': 'Add Task'}</button>
            </form>
        </div>
    )
}

export default TodoForm;
