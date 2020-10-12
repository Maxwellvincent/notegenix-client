import React, {useState, useEffect} from 'react';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import './App.css';


function App() {

  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);


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

  const addTodo = (todoText) => {
    console.log(todoText);
          // check ane make sure we are not receiving empty strings
          if(todoText.description.length > 0){
            setTodos([...todos, todoText]);
          }
  }

  const findItem = id => {
    const item = todos.find(todo => todo.id === id);
    setEditTodo(item)
  }

  // This function will update the server

  async function updateTodo(description,id) {

    try {
      console.log(JSON.stringify(description));
      // const body = {description};
      const resp = await fetch(`http://localhost:8000/api/v1/todos/` +id, {
        method: 'PATCH',
        headers: {"Content_type": 'application/json'},
        body : JSON.stringify(description)
      });
      console.log(resp);
    } catch (error) {
      console.log(error.message)
    }
  }
  // This edit task function is not working, is it because Im not making a post request just yet?
  const editTask = (description, id) => {
    // this is the description of the task
    console.log({description: description})
    //This is a reference to the id of the task
    console.log(id)

    updateTodo({description: description}, id)
    // console.log(todos);
    const newTodos = todos.map(task => task.id === id ? {description, id} : task);
    setTodos(newTodos)
    setEditTodo(null);
    console.log(newTodos);
    //Need to set up update request here

    
  }
  

  return (
    <main className='App'>
      <TodoForm
      addTodo={addTodo} 
      editTask={editTask}
      editTodo={editTodo}
        // addTodo={(todoText) => {
        //   console.log(todoText);
        //   // check ane make sure we are not receiving empty strings
        //   if(todoText.description.length > 0){
        //     setTodos([...todos, todoText]);
        //   }
        // }}
      />
      <TodoList 
      todos={todos}
      findItem={findItem}
      deleteTodo={deleteTodo}
      />
    </main>
  );
}

export default App;
