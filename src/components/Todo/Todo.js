import React from 'react';
import EditTodo from '../EditTodo/EditTodo';

// import EditTodo from './EditTodo';


const Todo = ({todo, deleteTodo, findItem}) => {
    // const [edit, setEditTodo] = useState({
    //     id: null,
    //     description: ""
    // });


    return (

        <div>
            <li key={todo.id}>
                <input type="text" 
                    value={todo.description} 
                    // onChange={setEditTodo}

                />
                <EditTodo 
                    todo={todo} 
                    findItem={findItem}

                />
                
                <button 
                    onClick={() => deleteTodo(todo.id)} 
                    className="btn">Delete
                </button>
            </li>
        </div>

    )
}


export default Todo;