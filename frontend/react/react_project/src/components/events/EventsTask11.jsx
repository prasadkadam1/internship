//? Mirror Input: Whatever the user types appears backwards below (e.g., "hello" → "olleh").

import { useState } from "react"

const EventsTask11 = ()=> {
    let [state, setState] = useState('')
    return (
        <div>
            <form action="">
                <input type="text" onChange={(e)=>{
                    setState(e.target.value.split('').reverse().join(''))
                }}/>
            </form>
            <h1>Text : {state}</h1>
        </div>
    )
}
export default EventsTask11