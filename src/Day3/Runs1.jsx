import React from 'react'
import { useState } from 'react'
const Runs1 = () => {
    const [curun,setrun]=useState(0);
    const [curwi,setwi]=useState(0);
  return (
    <div>
        <h1>CurrentRun {curun}</h1>
        <br/>
        <h1>CurrentWickets {curwi}</h1>
        <br/>
        <button className="bg-blue-500-px-10" disabled={curwi >= 10} onClick={()=>
        {
            setrun(curun+1)
        }}>One Run</button>
        <button disabled={curwi >= 10} onClick={()=>
        {
            setrun(curun+2)
        }}>Two Run</button>
        <button disabled={curwi >= 10} onClick={()=>
        {
            setrun(curun+3)
        }}>Three Run</button>
        <button disabled={curwi >= 10} onClick={()=>
        {
            setrun(curun+4)
        }}>Four Run</button>
        <button disabled={curwi >= 10} onClick={()=>
        {
            setrun(curun+6)
        }}>Six Run</button>
        <br/>
        <button disabled={curwi >= 10} onClick={()=>
        {
            setwi(curwi+1)
        }}>OUT!!!</button>

    </div>
  )
}

export default Runs1