import React from 'react';
import './App.css';

// Components
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

// ### STEP 2 - Set up state in your component

// You get to choose how you want to set up your components. Please don't just do this all inside App. I know it is a small and simple project, but you will do yourself a great service by setting your app up as if it were going to be a larger application

// - Using the `reducer` hook, set up state in your component. Think about what you'll need in order to use the reducer hook, and think about what it returns.
// - Now render your list of todos from your reducer in your app

function App() {
  return (
    <div className="App">
      <h1>Reducer Todo List</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
