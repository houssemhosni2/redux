import {useState} from 'react'
import { useDispatch } from "react-redux";

const AddTask = () => {
    const dispatch= useDispatch();
    const [input, setInput] = useState("")
    let doneNot = true;
    const filterDoneNot = ()=>{
        dispatch({type:"FILTER", payload:doneNot})
        doneNot= !doneNot
    }
    return (
        <div className="addTask">
            <form >
              <input type="text" placeholder="Enter Task Description" id="description" value={input} onChange={e=>setInput(e.target.value)}/>
              <input className="btn" type="button" onClick={()=>dispatch({type:"ADD_TASK", payload:input})} value="Add Task"/>
              <input className="btn" type="button" onClick={filterDoneNot} value="Filter"/>
              <input className="btn" type="button" onClick={()=>dispatch({type:"INIT_FILTER"})} value="Show All"/>
              </form>
        </div>
    )
}
export default AddTask