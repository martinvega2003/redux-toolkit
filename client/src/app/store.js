import { configureStore } from '@reduxjs/toolkit' // ConfigureStore returns an object to create the store
import taskReducer from '../features/tasks/taskSlice'

export const store = configureStore({ // Create an instance from store.
  reducer: {
    tasks: taskReducer,
  },
})