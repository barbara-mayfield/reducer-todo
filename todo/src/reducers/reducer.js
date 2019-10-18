// ### STEP 1 - Build a simple reducer and initial state

// - In a folder called `reducers` add a reducer file and build out a simple reducer with just a default return for now
// - In the same file, build your initial state object that has a list of todos with the following shape:

// ```js
// {
//   item: 'Learn about reducers',
//   completed: false,
//   id: 3892987589
// }
// ```

// - Export both the reducer and the initial state object

export const initialState = {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  }

export function reducer(){
    switch(action.type) {
        default: 
            return state;
    }
}