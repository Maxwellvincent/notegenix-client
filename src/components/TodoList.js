import React, { useState, useEffect} from 'react';
import './TodoList.css';

const TodoList = ({todos, deleteTodo}) => {

    // const [todos, setTodos] = useState([]);

        //This is a function to get all notes from the server, making an async request
    // async function getTodos(){
    //     // Make a fetch request to the server to open a connection for a response, use async because it will take time to receive the data
    //     const response = await fetch(`http://localhost:8000/api/v1/todos`);
    //     // Check that we are receiving a response
    //     console.log(response);
    //     // we are returning an array of notes to be display, the data that we are receiving will be json, so we need to parse the data with .json();
    //     const todosArray = await response.json();
    //     // console.log(todosArray);

    //     // inside the state we want to put the todos, by usring React hook setTodos
    //     setTodos(todosArray);
    // }

    //using instead of componentDidMount and ComponentDidUpdate, this does it all combined.
    // useEffect(() => {
    //     getTodos();
    // },[]);
    //Explains why we need to set an array at the end of useEffect https://www.robinwieruch.de/react-hooks-fetch-data

    // console.log(todos)

    // async function deleteTodo(id){
    //     console.log(id);
    //     try {
    //         await fetch(`http://localhost:8000/api/v1/todos/${id}`, {
    //             method: "DELETE"
    //         });
    //         //We dont want to have to refresh the page to relod the delete, so we need to make sure we change the state, which changing the state we rerender
    //         setTodos(todos.filter(todo => todo.id !== id));
    //         //we want to return all the todos in the todos state that does NOT equal the id that i just clicked
           
    //     } catch (error) {
    //         console.error(error.message);
    //     }
        

    // }

    return (
       
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map(todo => (
                        
                        <tr key={todo.id}>
                            <td>{todo.description}</td>
                            <td>Edit</td>
                            <td>
                                <button 
                                onClick={() => deleteTodo(todo.id)} 
                                className="btn">Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    {/* <tr>
                        <td>Alfreds Futterkiste</td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                    </tr> */}
                </tbody>
                
            </table>
        </div>

    )
}

export default TodoList;