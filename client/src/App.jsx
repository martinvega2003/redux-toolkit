import React from 'react'
import { store } from './app/store' // Import the store created
import { Provider } from 'react-redux' // Import provider from redux

const App = () => {
  return ( // Wrap the App with the redux Provider and pass the store as prop
    <Provider store={store}>
      <div className='text-center text-9xl text-red-500'>App</div>
    </Provider>
  )
}

export default App
