import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { addTask, editTask } from '../features/tasks/taskSlice'
import {v4 as uuid} from "uuid"

const TaskForm = () => {

  const dispatch = useDispatch() // dispatch is used to execute the reducers functions.
  const tasks = useSelector(state => state.tasks) || [];
  
  const navigate = useNavigate()

  const params = useParams()

  const [task, setTask] = useState({
    title: "",
    description: "",
  })

  useEffect(() => {
    if (params.id && tasks.length > 0) { // If an ID was passed in the url:
      setTask(tasks.find(task => task.id === params.id)) // Look for a task with that ID and set the task state as the found task
    }
  }, [tasks])

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
    <form className='bg-neutral-800 max-w-sm p-4 text-white'>
      <label htmlFor="title" className="block text-xs font-bold mb-2">Title:</label>
      <input className='w-full p-2 rounded-2xl bg-neutral-600 mb-2' name='title' type='text' placeholder='Task title' onChange={handleChange} value={task.title} />

      <label htmlFor="description" className="block text-xs font-bold mb-2">Description:</label>
      <textarea className='w-full p-2 rounded-2xl bg-neutral-600 mb-2' name='description' placeholder='Task description' onChange={handleChange} value={task.description}></textarea>

      <button className='bg-indigo-600 hover:bg-indigo-900 px-4 py-2 rounded-md transition duration-300 cursor-pointer' onClick={handleSubmit}>Save</button>
    </form>
  )
}

export default TaskForm
