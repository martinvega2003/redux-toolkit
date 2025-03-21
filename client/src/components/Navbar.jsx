import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='fixed top-0 bg-white w-full py-4 flex justify-end items-center shadow-2xl'>
      <Link to='/' className='py-2 px-4 mx-2 text-center border border-blue-400 bg-blue-400 hover:bg-transparent text-white hover:text-blue-400 rounded-2xl transition duration-300'>
        Tasks List
      </Link>
      <Link to='create-task' className='py-2 px-4 mx-2 text-center border border-blue-600 bg-blue-600 hover:bg-transparent text-white hover:text-blue-600 rounded-2xl transition duration-300'>
        Create Task
      </Link>
    </div>
  )
}

export default Navbar