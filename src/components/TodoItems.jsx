import React from 'react'
import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import delete_icon from '../assets/delete.png'
const TodoItems = ({text, id, isComplete, deleteTodo, toggle}) => {
  return (
    <div className='flex item-center my-3 gap-2'>
      {/*Don't forget to add value to the onclick*/}
      <div onClick={() => {}} className='flex flex-1 items-center cursor-pointer'> 

        <img  src={isComplete ? tick :not_tick} alt= " " className='w-7'/>
        <p className='text-slate-700 ml-4 text-[17px]'> 
          {text} </p>
      </div>

      <img onClick={() => {deleteTodo(id)}} src={delete_icon} alt="" className=' w-3.5 h-3.5 
      cursor-pointer'/>


    </div>
  )
}

export default TodoItems