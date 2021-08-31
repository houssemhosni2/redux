import { useDispatch } from "react-redux";

const Task = (props) => {
    const {task} = props;
    const dispatch= useDispatch();
    const editdescrip = (e)=>{
        let tempo = e.target.value
        dispatch({type:"EDIT_DISC", payload:task.id , tempo:tempo})
    }
    return (
       <>
            <input className="descrip" type="text" value={task.description} onChange={editdescrip}></input>
            <span className="isDone" onClick={()=>dispatch({type:"UPDATE_ISDONE", payload:task.id})} style={{cursor: "pointer"}}>{task.isDone? 'Done' : 'Not Done Yet'}</span>
            <span className="action icon" onClick={()=>dispatch({type:"DEL_TASK", payload:task.id})}>&times;</span>
       </>
    )
}
export default Task;