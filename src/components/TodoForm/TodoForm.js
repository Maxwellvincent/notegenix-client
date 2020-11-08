import React, { useState, useEffect }from 'react';
import './TodoForm.css';
// import { uuid } from 'uuidv4';
import {v4} from 'uuid';

// import {MdAddBox} from 'react-icons/md'

const TodoForm = ({addTodo, editTask, editTodo}) => {
    // const [todos, setTodos] = useState([]);
    const [value, setValue] = useState('');

    //handle the form submission
    const onFormSubmit = async (e) => {
        e.preventDefault();
       
        if(!editTodo){
            const todoObj = {
                description: value,
                // id: uuid()
                id: v4()
            }
            addTodo(todoObj)
            try {
                const body = {description: value};
                // const response 
                await fetch('https://boiling-citadel-55622.herokuapp.com/api/v1/todos', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(body)
                });
               
                // Need to grab state of todos and push in new todo
                
                setValue('');
                
            } catch (error) {
                // console.log(error.message);
            }
        } else {
            //This means we are editing the todo task
            editTask(value, editTodo.id)
        }
        // console.log(value);
        

        
    }

    useEffect(() => {
        if(editTodo){
            // console.log(editTodo);
            setValue(editTodo.description);
            // console.log(editTodo);
        } else {
            setValue('');
        }
    }, [editTodo])


    return (
        <div className="todo-form">
            <form onSubmit={onFormSubmit}>
                <div className="form-control">
                    <input type="text" 
                        placeholder="add todo" 
                        className="form-control"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        required
                    />
                    <button type="submit">{editTodo ? 'Edit Task': 'Add Task'}</button>
                </div>
                
            </form>
        </div>
    )
}

export default TodoForm;
