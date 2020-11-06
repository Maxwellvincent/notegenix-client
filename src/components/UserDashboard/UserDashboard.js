import React,{useState, useEffect} from 'react';
import {toast} from 'react-toastify';

//components
import TodoForm from '../TodoForm/TodoForm';
import TodoList from '../TodoList/TodoList';

const UserDashboard = ({setAuth, addTodo, editTask, editTodo, todos, findItem, deleteTodo}) => {
    const [name, setName] = useState("");
    const [allTodos, setAllTodos] = useState([]);
    const [todosChange, setTodosChange] = useState(false);


    async function getName(){
        try {
            const response = await fetch("http://localhost:8000/dashboard/", {
                method: "GET",
                headers: {token: localStorage.token}
            });
            const parseRes = await response.json();
            console.log(parseRes);
            const {user_name} = parseRes[0];
            setName(user_name);
            setAllTodos(parseRes);
        } catch (err) {
            console.error(err.message);
        }
    }


    useEffect(() => {
        setAllTodos(allTodos);
    }, [allTodos])

    useEffect(() => {
        getName();
        setTodosChange(false);
    },[todosChange]);


    async function deleteUserTodo(id){
        console.log(id);
        try {
            await fetch(`http://localhost:8000/dashboard/todos/${id}`, {
                method: "DELETE",
                headers: {token: localStorage.token}
            });
            //We dont want to have to refresh the page to relod the delete, so we need to make sure we change the state, which changing the state we rerender
            setAllTodos(allTodos.filter(todo => todo.task_id !== id));
            console.log(allTodos);
            //we want to return all the todos in the todos state that does NOT equal the id that i just clicked
           
        } catch (error) {
            console.error(error.message);
        }
    }

    const findUserItem = id => {
        console.log(id);
        console.log(allTodos);
        const item = allTodos.find(todo => todo.task_id === id);
        console.log(item);
        // setEditTodo(item)
      }

    const logout = (e) => {
        e.preventDefault();
        localStorage.removeItem("token");
        setAuth(false);
        toast.success("Logged out succcessfully!");
    }

    return (
        <div>
            <h1>{name.toUpperCase()}'s Note List</h1>
            <button onClick={e => logout(e)} style={{"width": "100px", "height": "50px","backgroundColor": "white"}}>Logout</button>
            <div>
                <TodoForm
                    addTodo={addTodo} 
                    editTask={editTask}
                    editTodo={editTodo}
                    setTodosChange={setTodosChange}
                />
                <TodoList 
                    // todos={todos}
                    allTodos={allTodos}
                    // findItem={findItem}
                    findUserItem={findUserItem}
                    deleteTodo={deleteTodo}
                    deleteUserTodo={deleteUserTodo}
                />
            </div>
        </div>
    )
}

export default UserDashboard
