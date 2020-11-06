import React from 'react';
import { AiFillCloseSquare, AiFillEdit } from 'react-icons/ai';


const Todo = ({todo, deleteTodo, findItem, deleteUserTodo, findUserItem}) => {

    return (

        <div className="todo-input">

            <div key={todo.id} className="user-input">
                <input type="text" 
                    defaultValue={todo.description} 
                />
                <AiFillEdit 
                    // onClick={() => findItem(todo.task_id)}
                    onClick={() => findUserItem(todo.task_id)}
                    className="icons"
                />
                
                <AiFillCloseSquare
                    onClick={() => deleteUserTodo(todo.task_id)} 
                    className="icons"
                />
            </div>
        </div>

    )
}


export default Todo;