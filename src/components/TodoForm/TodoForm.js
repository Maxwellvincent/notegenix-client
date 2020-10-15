import React, { useState, useEffect }from 'react';
import './TodoForm.css';
import {MdAddBox} from 'react-icons/md'

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
                const response = await fetch('https://boiling-citadel-55622.herokuapp.com/api/v1/todos', {
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
        <div className="todo-form">
            {/* <h1>Input Todo</h1> */}
            
            <form onSubmit={onFormSubmit}>
                <div className="form-control">
                    <input type="text" 
                        placeholder="add todo" 
                        className="form-control"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        
                        />
                    {/* <MdAddBox type="submit" className="icons"> 
                        {MdAddBox? 'Edit Task': 'Add Task'}
                    </MdAddBox> */}
                    <button type="submit">{editTodo ? 'Edit Task': 'Add Task'}</button>
                </div>
                
            </form>
        </div>
    )
}

export default TodoForm;
