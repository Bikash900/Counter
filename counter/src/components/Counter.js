import React from 'react'
import { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);
    const handleIncreament = ()=> {
        setCount(count + 1)
    }

    const handleDecrement = ()=> {
        setCount(count - 1)
    }
  return (
    <div className='counter'>
    
             <button onClick={handleIncreament}>Increment</button>
        <div className='number'> {count} </div> 
        <button onClick={handleDecrement}>Decrement </button>
      
       
    </div>
  )
}

export default Counter
