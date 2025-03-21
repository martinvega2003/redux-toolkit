import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addTask } from '../features/tasks/taskSlice'
import {v4 as uuid} from "uuid"

const TaskForm = () => {

  const dispatch = useDispatch() // dispatch is used to execute the reducers functions.
  const tasks = useSelector(state => state.tasks)
  
  const navigate = useNavigate()

  const [task, setTask] = useState({
    title: "",
    description: "",
  })

  const handleChange = e => {
    setTask({
      ...task,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addTask({
      ...task,
      id: uuid()
    }))
    navigate('/')
  }

  return (
    <form>
      <input name='title' type='text' placeholder='Task title' onChange={handleChange} />
      <textarea name='description' placeholder='Task description' onChange={handleChange}></textarea>
      <button onClick={handleSubmit} className='cursor-pointer border-2 border-blue-400'>Save</button>
    </form>
  )
}

export default TaskForm
