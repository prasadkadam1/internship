import React, { useRef } from 'react'

const UseRefTask1 = () => {
  
    let p3 = useRef()
  return (
    <div>
        <p onClick={()=>{p3.current.style.background = "red"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis non asperiores quis nisi itaque cum veniam molestias facilis explicabo similique!</p> <br /> <br />
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis non asperiores quis nisi itaque cum veniam molestias facilis explicabo similique!</p> <br /> <br />
        <p ref={p3}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis non asperiores quis nisi itaque cum veniam molestias facilis explicabo similique!</p> <br /> <br />
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis non asperiores quis nisi itaque cum veniam molestias facilis explicabo similique!</p> <br /> <br />
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis non asperiores quis nisi itaque cum veniam molestias facilis explicabo similique!</p> <br /> <br />
    </div>
  )
}

export default UseRefTask1