import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteTask, completeTask } from '../features/tasks/taskSlice'
import { Link } from 'react-router-dom'

const TasksList = () => {

  const tasks = useSelector(state => state.tasks)
  const dispatch = useDispatch()

  const handleDelete = id => {
    dispatch(deleteTask(id))
  }

  const handleComplete = id => {
    dispatch(completeTask(id))
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 px-4 sm:px-12'>
      {tasks.map(task => {
        return (
          <div key={task.id} className={`bg-neutral-800 text-white p-4 rounded-2xl ${task.completed ? 'opacity-70' : ''}`}>
            <header className="flex justify-between">
              <h3 className={`text-lg mr-4 overflow-x-scroll ${task.completed ? 'line-through' : ''}`}>{task.title}</h3>
              <div className="flex gap-x-2">
                <button 
                  onClick={() => handleComplete(task.id)} 
                  className='bg-green-500 hover:bg-transparent hover:text-green-500 px-2 py-1 text-xs rounded-2xl border-2 border-green-500 transition duration-300'
                >Complete</button>
                <button 
                  onClick={() => handleDelete(task.id)} 
                  className='bg-red-500 hover:bg-transparent hover:text-red-500 px-2 py-1 text-xs rounded-2xl border-2 border-red-500 transition duration-300'
                >Delete</button>
                <Link  
                  to={`/edit-task/${task.id}`} 
                  className='bg-zinc-600 hover:bg-transparent hover:text-zinc-600 px-2 py-1 text-xs rounded-2xl border-2 border-zinc-600 transition duration-300'
                >Edit</Link>
              </div>
            </header>
            <p className={`text-md overflow-x-scroll ${task.completed ? 'line-through' : ''}`}>{task.description}</p>
          </div>
        )
      })}
    </div>
  )
}

export default TasksList
