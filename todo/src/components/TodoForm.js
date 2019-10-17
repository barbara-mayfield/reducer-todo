import React from 'react'

// ### STEP 3 - Adding todos

// - Build a form to add todos to your list
// - Build a function that will dispatch an action to add a new todo
// - Write the `case` in your reducer for adding a todo (You can create a unique id with `new Date()`)

// ### STEP 4 - Toggle the completed field

// - Build a function that will dispatch an action to toggle a todo's completed field
// - Invoke this new function when you click on a todo
// - Style your todo to somehow show that it is completed (be creative here!)
// - Write the `case` in your reducer for toggling the completed property

function TodoForm() {
    return (
        <div>
            <form>
                <input type="text" placeholder="Add Todo" />
                <button>Add</button>
                <button>Delete</button> 
            </form>          
        </div>
    )
}

export default TodoForm
