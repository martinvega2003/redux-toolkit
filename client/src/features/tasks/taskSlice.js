import { createSlice } from "@reduxjs/toolkit"; // createSlice creates an Instace of slice

export const taskSlice = createSlice({ 
  name: 'tasks', // Define the name of the slice
  initialState: [], // define the initial value, just like when we setup an initial value with useState([]). This value can be anything.
  reducers: { // Here we add functions to modify the initial state of this slice.
    //
  }
})

export default taskSlice.reducer // We import the reducer of the slice by default.