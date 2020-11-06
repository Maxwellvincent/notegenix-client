import React from 'react';
import Todo from '../Todo/Todo'
import './TodoList.css';

const TodoList = ({todos, deleteTodo, findItem, allTodos, deleteUserTodo, findUserItem}) => {
    // console.log(allTodos);
    return (
       
        <div className="todo-list">
            <h2>Tasks to complete</h2>
                {allTodos.map((todo,index) => (
                        <Todo 
                            key={index} 
                            todo={todo} 
                            deleteTodo={deleteTodo}
                            deleteUserTodo={deleteUserTodo}
                            findUserItem={findUserItem}  
                            findItem={findItem}/>
                    ))}
            
        </div>


        // <div className="todo-list">
        //     <h2>Tasks to complete</h2>
        //         {todos.map((todo,index) => (
        //                 <Todo 
        //                     key={index} 
        //                     todo={todo} 
        //                     deleteTodo={deleteTodo} 
        //                     findItem={findItem}/>
        //             ))}
            
        // </div>

    )
}

export default TodoList;