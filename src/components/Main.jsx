import React from 'react'
const Main = () => {
    
  return (
    <div>
    <center>
            <form>
            <label for="fname">First name:</label>
            <input type="text" id="fname" name="fname" placeholder='Enter your first Name'/><br/>
            <label for="lname">Last name:</label>
            <input type="text" id="lname" name="lname" placeholder='Enter your Second Name'/>
            </form>
            <button>Submit</button>
    </center>
    <hr />
    </div>
  )
}

export default Main