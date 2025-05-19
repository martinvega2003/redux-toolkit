import { createSlice } from "@reduxjs/toolkit"; // createSlice creates an Instace of slice

export const taskSlice = createSlice({ 
  name: 'tasks', // Define the name of the slice
  initialState: [], // define the initial value, just like when we setup an initial value with useState([]). This value can be anything.
  reducers: { // Here we add functions to modify the initial state of this slice.
    addTask: (state, action) => { // state is the current state and action is the parameter, which is an object with keys: name and payload (Payload being the value)
      state.push(action.payload) // As state is the array, the action.payload (value) is pushed
    },
    editTask: (state, action) => {
      const {id, title, description} = action.payload // These are the edited title and description
      const foundTask = state.find(task => task.id === id)

      //Update Task data
      if (foundTask) {
        foundTask.title = title 
        foundTask.description = description
      }
    },
    deleteTask: (state, action) => { // action.payload is the id, action.type is the reducer executed (deleteTask)
      const taskFound = state.find(task => task.id === action.payload)
      if (taskFound) {
        state.splice(state.indexOf(taskFound), 1)
      }
    },
    completeTask: (state, action) => { // action.payload is the id, action.type is the reducer executed (deleteTask)
      const taskFound = state.find(task => task.id === action.payload)
      if (taskFound) {
        taskFound.completed = !taskFound.completed;
      }
    }
  }
})

export const {addTask, deleteTask, editTask, completeTask} = taskSlice.actions // Export the reducers

export default taskSlice.reducer // We import the reducer of the slice by default.