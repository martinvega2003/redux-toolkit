import React from 'react'
import { useSelector, useDispatch } from 'react-redux' // useSelector is used to select values from the state, useDispatch is used to execute actions on the state

const App = () => {
  const taskState = useSelector(state => state.tasks) // tasks is the name assigned to taskReducer in store.js
  console.log(taskState)
  return ( // Wrap the App with the redux Provider and pass the store as prop
    <div className='text-center text-9xl text-red-500'>App</div>
  )
}

export default App
