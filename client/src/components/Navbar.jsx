import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { FaSun, FaMoon } from 'react-icons/fa'
import { ThemeModeContext } from '../context/themeModeContext.jsx'

const Navbar = () => {

  const { darkMode, setDarkMode } = useContext(ThemeModeContext);

  return (
    <div className='fixed top-0 bg-white dark:bg-zinc-600 w-full h-24 py-4 flex justify-end items-center shadow-2xl'>
      <button 
        onClick={() => setDarkMode(!darkMode)} 
        className={`mx-2 ${darkMode ?  'text-zinc-900' : 'text-white'} hover:text-blue-600 text-4xl transition duration-300 cursor-pointer hover:scale-110`}
      >
        {darkMode ? <FaMoon /> : <FaSun />}
      </button>

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