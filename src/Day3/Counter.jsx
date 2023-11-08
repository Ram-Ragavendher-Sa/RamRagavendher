import React from 'react'
import { useState } from 'react'
const Counter = () => {
    const [iVisible,stVisible]=useState(1);
  return (
    <div>
        <button onClick={()=>
        {
            stVisible(iVisible+1);
            {console.log(iVisible)}
        }}>React</button>
        <button onClick={()=>
        {
            stVisible(iVisible==0);
            {console.log(iVisible)}
        }}>Reset</button>
    </div>
  )
}

export default Counter