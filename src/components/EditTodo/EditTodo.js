import React from 'react';

const EditTodo = ({ todo, findItem}) => {
    // When button is clicked I need to find a way to create new table data
    // also need to set previous description 
    //Need to save the newEdit and set it in state
    //Then submite the newTodo on button click, back to  app.js state


    return (
        <div>
            <button onClick={() => findItem(todo.id)}>Edit</button>
        </div>
    )
}

export default EditTodo;