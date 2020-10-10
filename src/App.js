import React, {useState, useEffect} from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';


function App() {

  const [todos, setTodos] = useState([]);



  // Need to put the state of the todos, add , edit, and delete functions here or be able to pass down the functions into the components


  //Need to make fetch request here to get all todos from server

  async function getAllTodos() {
    try {
      const response = await fetch(`http://localhost:8000/api/v1/todos`);
      // Check that we are receiving a response
        console.log(response);
       // we are returning an array of notes to be display, the data that we are receiving will be json, so we need to parse the data with .json();
       const todosArray = await response.json();
       // console.log(todosArray);

       // inside the state we want to put the todos, by usring React hook setTodos
       setTodos(...todos,todosArray);

    } catch (error) {
      console.error(error.message);
    }
  }

  async function deleteTodo(id){
        console.log(id);
        try {
            await fetch(`http://localhost:8000/api/v1/todos/${id}`, {
                method: "DELETE"
            });
            //We dont want to have to refresh the page to relod the delete, so we need to make sure we change the state, which changing the state we rerender
            setTodos(todos.filter(todo => todo.id !== id));
            //we want to return all the todos in the todos state that does NOT equal the id that i just clicked
           
        } catch (error) {
            console.error(error.message);
        }
    }

   //using instead of componentDidMount and ComponentDidUpdate, this does it all combined.
    useEffect(() => {
        getAllTodos();
    },[]);

    //Explains why we need to set an array at the end of useEffect https://www.robinwieruch.de/react-hooks-fetch-data

  return (
    <main className='App'>
      <TodoForm 
        saveTodo={(todoText) => {
          console.log(todoText);
          // check ane make sure we are not receiving empty strings
          if(todoText.description.length > 0){
            setTodos([...todos, todoText]);
          }
        }}
      />
      <TodoList 
      todos={todos}
      deleteTodo={deleteTodo}
      // editTodo={editTodo}
      />
    </main>
  );
}

export default App;
