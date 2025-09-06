import { useState } from "react";

// Right Click: Prevent the default right-click menu on a div and show a custom message instead.
let EventsTask2 = ()=>{
    // let [state, setState]= useState('')
    return (
        <div>
            <div onContextMenu={(e)=>{
                e.preventDefault()
                alert('Context menu is disabled')
            }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, pariatur.</div>
            
            {/* <input type="text" onChange={(e)=>{
                console.log(e.target.value);
                setState(e.target.value)
            }} />
            <h1> text : {state}</h1> */}
        </div>
    )
}
export default EventsTask2;