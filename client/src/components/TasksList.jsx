import React from 'react'
import { useSelector } from 'react-redux'

const TasksList = () => {

  const tasks = useSelector(state => state.tasks)

  return (
    <div>
      {tasks.map(task => {
        return (
          <div key={task.id}>
            <h3 className='text-5xl'>{task.title}</h3>
            <p className='text-3xl'>{task.description}</p>
          </div>
        )
      })}
    </div>
  )
}

export default TasksList
