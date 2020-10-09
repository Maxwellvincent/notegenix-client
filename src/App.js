import React from 'react';
import InputTodos from './components/InputTodos';
import ListTodos from './components/ListTodos';
import './App.css';


function App() {
  return (
    <main className='App'>
      <InputTodos />
      <ListTodos />
    </main>
  );
}

export default App;
