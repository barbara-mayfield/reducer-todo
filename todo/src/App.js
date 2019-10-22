import React, { useReducer } from 'react'
import { reducer, initialState } from './reducers/reducer'

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import { TaskContext } from './contexts/task'

import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const addTask = item => {
    dispatch({ 
              type: "ADD_TASK", 
              payload: item
            })
  }

  const toggleCompleted = id => {
    dispatch({
        type: "TOGGLE_COMPLETED",
        payload: id
    })
  }

  const clearCompleted = id => {
    dispatch({ 
              type: "CLEAR_COMPLETED"
    })
  }

  return (
    <div className="App">
      <TaskContext.Provider value={{ addTask, clearCompleted, toggleCompleted }}>
        <h1>Reducer Todo List</h1>
        {/* - Now render your list of todos from your reducer in your app */}
        <TodoForm />
        <TodoList tasks={state.tasks} />
      </TaskContext.Provider>
    </div>
  );
}

export default App;
