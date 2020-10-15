import React from 'react';
import EditTodo from '../EditTodo/EditTodo';
import { AiFillCloseSquare, AiFillEdit } from 'react-icons/ai';

// import EditTodo from './EditTodo';


const Todo = ({todo, deleteTodo, findItem}) => {
    // const [edit, setEditTodo] = useState({
    //     id: null,
    //     description: ""
    // });


    return (

        <div className="todo-input">

            <div key={todo.id} className="user-input">
                <input type="text" 
                    value={todo.description} 
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
                

            {/* <li key={todo.id}>
                <input type="text" 
                    value={todo.description} 
                    

                />
                <AiFillEdit 
                onClick={() => findItem(todo.id)}
                className="icons"
                />

                <EditTodo 
                    todo={todo} 
                    findItem={findItem}

                />
                
                <AiFillCloseSquare
                    onClick={() => deleteTodo(todo.id)} 
                    className="icons"
                />
                
                <button 
                    onClick={() => deleteTodo(todo.id)} 
                    className="btn">Delete
                </button> 
            </li> */}
        </div>

    )
}


export default Todo;