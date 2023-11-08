import { useState } from 'react'

const DynamicRendering = () => {
    const [selectedFramework, setSelectedFramework]= useState(-1);
    const arr = [
        "ReactJS",
        "AngularJS",
    ];
  return (
    <>
    <h1>Clicked Frameword{selectedFramework}</h1>
    </>
  )
}

export default DynamicRendering