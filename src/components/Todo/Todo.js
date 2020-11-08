import React from 'react';
import { AiFillCloseSquare, AiFillEdit } from 'react-icons/ai';


const Todo = ({todo, deleteTodo, findItem}) => {

    return (

        <div className="todo-input">

            <div key={todo.id} className="user-input">
                <input type="text" 
                    value={todo.description} 
                    readOnly
                />
                <AiFillEdit 
                    onClick={() => findItem(todo.id)}
                    className="icons"
                />
                
                <AiFillCloseSquare
                    onClick={() => deleteTodo(todo.id)} 
                    className="icons"
                />
            </div>
        </div>

    )
}


export default Todo;