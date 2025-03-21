import React from 'react'
import { useSelector, useDispatch } from 'react-redux' // useSelector is used to select values from the state, useDispatch is used to execute actions on the state
import TaskForm from './components/TaskForm.jsx'
import TasksList from './components/TasksList.jsx'

//react-router-dom:
import { BrowserRouter, Routes, Route } from "react-router-dom"

const App = () => {
  const taskState = useSelector(state => state.tasks) // tasks is the name assigned to taskReducer in store.js
  console.log(taskState)
  return ( // Wrap the App with the redux Provider and pass the store as prop
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<TasksList />} />
        <Route path='/create-task' element={<TaskForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
