import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteTask } from '../features/tasks/taskSlice'
import { Link } from 'react-router-dom'

const TasksList = () => {

  const tasks = useSelector(state => state.tasks)
  const dispatch = useDispatch()

  const handleDelete = id => {
    dispatch(deleteTask(id))
  }

  return (
    <div>
      {tasks.map(task => {
        return (
          <div key={task.id}>
            <h3 className='text-5xl'>{task.title}</h3>
            <p className='text-3xl'>{task.description}</p>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
            <Link to={`/edit-task/${task.id}`}>Edit</Link>
          </div>
        )
      })}
    </div>
  )
}

export default TasksList
