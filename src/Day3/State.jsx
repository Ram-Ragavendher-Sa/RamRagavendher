import React from 'react'
import { useState } from 'react'
const State = () => {
    const [isVisible,setVisible]=useState(false);
  return (
    <div><button onClick={()=>
    {
        setVisible(!isVisible);
    }}>{isVisible ? "Kaiken" : "Super"}</button></div>
  )
}

export default State