import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { addTask, editTask } from '../features/tasks/taskSlice'
import {v4 as uuid} from "uuid"

const TaskForm = () => {

  const dispatch = useDispatch() // dispatch is used to execute the reducers functions.
  const tasks = useSelector(state => state.tasks)
  
  const navigate = useNavigate()

  const params = useParams()

  const [task, setTask] = useState({
    title: "",
    description: "",
  })

  useEffect(() => {
    if (params.id) { // If an ID was passed in the url:
      setTask(tasks.find(task => task.id === params.id)) // Look for a task with that ID and set the task state as the found task
    }
  })

  const handleChange = e => {
    setTask({
      ...task,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (params.id) {
      dispatch(editTask(task))
    } else {
      dispatch(addTask({
        ...task,
        id: uuid()
      }))
    }

    navigate('/')
  }

  return (
    <form>
      <input name='title' type='text' placeholder='Task title' onChange={handleChange} value={task.title} />
      <textarea name='description' placeholder='Task description' onChange={handleChange} value={task.description}></textarea>
      <button onClick={handleSubmit} className='cursor-pointer border-2 border-blue-400'>Save</button>
    </form>
  )
}

export default TaskForm
