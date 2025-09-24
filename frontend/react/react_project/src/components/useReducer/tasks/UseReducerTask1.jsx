import React, { useReducer } from 'react'

const UseReducerTask1 = () => {
    let reducer = (state, action)=>{
         switch (action) {
            case 'i': return state+=1 
                break;
            case 'd': return state-=1 
                break;
            case 'r': return 0 
                break;
         
            default: return state
                break;
         }
    }
    let [state, dispatch] = useReducer(reducer , 0)
  return (
    <div>
        <p>state : {state}</p>
        <button onClick={()=>{dispatch("i")}}>inc</button>   <br />
        <button onClick={()=>{dispatch("d")}}>dec</button>   <br />
        <button onClick={()=>{dispatch("r")}}>reset</button> <br />
    </div>
  )
}

export default UseReducerTask1