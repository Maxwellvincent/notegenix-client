import React, {useState, useEffect} from 'react';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import Navbar from './components/Navbar/Navbar';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home';
import About from './components/Pages/About';


function App() {
  // Need to put the state of the todos, add , edit, and delete functions here or be able to pass down the functions into the components
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);


  //Need to make fetch request here to get all todos from server

  async function getAllTodos() {
    try {
      const response = await fetch(`https://boiling-citadel-55622.herokuapp.com/api/v1/todos`);
      // Check that we are receiving a response
       // we are returning an array of notes to be display, the data that we are receiving will be json, so we need to parse the data with .json();
       const todosArray = await response.json();
       // inside the state we want to put the todos, by usring React hook setTodos
       setTodos(...todos,todosArray);

    } catch (error) {
      console.error(error.message);
    }
  }

  // Function to delete specific notes
  async function deleteTodo(id){
        // console.log(id);
        try {
            await fetch(`https://boiling-citadel-55622.herokuapp.com/api/v1/todos/${id}`, {
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
   //This is working with no error
   useEffect(getAllTodos,[])

    //Explains why we need to set an array at the end of useEffect https://www.robinwieruch.de/react-hooks-fetch-data

    //MAY NEED TO PASS IN AN OBJECT HERE, SO I CAN HAVE ACCESS TO THE ID AS WELL, MAY NEED TO GENERATE A UUID
  const addTodo = (todoText) => {
    // console.log(todoText);
          // check ane make sure we are not receiving empty strings
          if(todoText.description.length > 0){ 
            setTodos([...todos, todoText]);
          }
  }

  const findItem = id => {
    // console.log(todos);
    const item = todos.find(todo => todo.id === id);
    // console.log(item);
    setEditTodo(item)
  }

  // This function will update the server

  async function updateTodo(description,id) {

    try {
      await fetch(`https://boiling-citadel-55622.herokuapp.com/api/v1/todos/` +id, {
        method: 'PATCH',
        headers: {'content-type': 'application/json'},
        body : JSON.stringify(description)
      });
    } catch (error) {
      // console.log(error.message)
    }
  }
  // This edit task function is not working, is it because Im not making a post request just yet?
  const editTask = (description, id) => {
  //  console.log(id);
    updateTodo({description: description}, id)
   
    const newTodos = todos.map(task => task.id === id ? {description: description, id: id} : task);
    setTodos(newTodos)
    setEditTodo(null);
      // console.log(newTodos);
  }
  

  return (
    
        <div className="main">
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path='/start' exact>
            <div className='todo-app'>
              <h1>Input Todo</h1>
              <TodoForm
                addTodo={addTodo} 
                editTask={editTask}
                editTodo={editTodo}
              />
              <TodoList 
                todos={todos}
                findItem={findItem}
                deleteTodo={deleteTodo}
              />
            </div>
          </Route>
          <Route path='/about' component={About}/>
        </Switch>
      </div>
   
    
    
  );
}

export default App;
