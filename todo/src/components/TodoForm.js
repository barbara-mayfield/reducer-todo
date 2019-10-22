
import React, { useState, useContext } from 'react';
import { TaskContext } from '../contexts/task'
// ### STEP 5 - Clearing completed todos

// - Build a function that will dispatch an action to filter out any completed todos
// - Invoke this new function when you click on a "Clear completed" button
// - Write the `case` in your reducer for filtering completed todos

// - Build a form to add todos to your list
const TodoForm = () => {
    const { addTask, clearCompleted } = useContext(TaskContext)
    const [formValue, setFormValue] = useState("")
    
    // - Build a function that will dispatch an action to add a new todo
    const handleSubmit = e => {
        e.preventDefault()
        addTask(formValue)
        setFormValue("");
    }
    
    const handleChange = e => {
        setFormValue(e.target.value)
    }

    const handleClear = e => {
        e.preventDefault()
        clearCompleted()
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text" 
                    name="task"
                    placeholder="Add a new task"
                    value={formValue} 
                    onChange={handleChange}
                />
                <button type="submit">Add</button>
                <button onClick={handleClear}>Clear Completed</button>
            </form>          
        </div>
    )
}

export default TodoForm
