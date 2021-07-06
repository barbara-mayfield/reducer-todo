// ### STEP 1 - Build a simple reducer and initial state

// - In a folder called `reducers` add a reducer file and build out a simple reducer with just a default return for now
export const initialState = {
    tasks: [
        {
        item: 'Learn about reducers',
        id: 3892987590,
        completed: false,
        edit: false
        }
    ]
}

export function reducer(state, action){
    switch(action.type) {
        // - Write the `case` in your reducer for adding a todo (You can create a unique id with `new Date()`)
        case "ADD_TASK":
            const newTask = {
                item: action.payload,
                id: Date.now(),
                completed: false,
                edit: false
                }
                return {
                    ...state, tasks: [...state.tasks, newTask]
                }
        case "TOGGLE_COMPLETED": 
            return {
                ...state, tasks: state.tasks.map(task => {
                if(task.id === action.payload){
                    return {
                        ...task,
                    completed: !task.completed
                }
                } else {
                    return task;
                }
            })
        };
        case "CLEAR_COMPLETED":
            return {
                ...state,
                tasks: state.tasks.filter(task => !task.completed)
            }
        case "TOGGLE_EDIT":
            return {
                ...state,
                edit: !state.edit
            }
        default: 
            return state;
    }
}

// - In the same file, build your initial state object that has a list of todos with the following shape:

// ```js
// {
//   item: 'Learn about reducers',
//   completed: false,
//   id: 3892987589
// }
// ```


// - Export both the reducer and the initial state object


