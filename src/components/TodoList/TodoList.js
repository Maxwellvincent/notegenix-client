import React from 'react';
import Todo from '../Todo/Todo'
import './TodoList.css';

const TodoList = ({todos, deleteTodo, findItem}) => {
    return (
       
        <div className="todo-list">
            <h2>Tasks to complete</h2>
                {todos.map((todo,index) => (
                        <Todo 
                            key={index} 
                            todo={todo} 
                            deleteTodo={deleteTodo} 
                            findItem={findItem}/>
                    ))}
            
        </div>

    )
}

export default TodoList;