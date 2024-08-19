import React from 'react'
import ToDo from './components/ToDo'
import TodoItems from './components/TodoItems'


const App = () => {
  return (
    <div className='bg-stone-900 grid py-4 min-h-screen'>

    <ToDo /> 
    <TodoItems/>
  

  </div>
  )
}

export default App