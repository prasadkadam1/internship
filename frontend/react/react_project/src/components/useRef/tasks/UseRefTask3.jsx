// Use useRef to directly change the input’s border color to red when a button is clicked.
import React, { useRef } from 'react'

const UseRefTask3 = () => {
    let inp = useRef()
    let handleClick= ()=>{
        inp.current.style.borderColor = "red"
    }
  return (
    <div>
        <input ref={inp}  className='border-2 border-black' type="text" /> <br /> <br />
        <button onClick={handleClick}  className='border-2 border-black' >Click</button>
    </div>
  )
}

export default UseRefTask3