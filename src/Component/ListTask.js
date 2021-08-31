import Task from "./Task";
import { useSelector} from "react-redux";

const ListTask = () => {
    let task = useSelector((state)=>state.task);
    const filter= useSelector((state)=>state.filter);
    task = task.filter(x=>x.isDone!==filter)
    let lgth = task.length;
    const listTasks = lgth?(
    task.map(task =>{
        return(
            <div key={task.id}>
                <Task task={task} />
            </div>
        )
    })
    ) : (<p>There is no task to show</p>)
    return (
        <div className="listTasks">
            <div>
                <span className="descrip title">Description</span>
                <span className="isDone title">Is Done?</span>
                <span className="action title">Action</span>
            </div>
            {listTasks}
        </div>
    )
}
export default ListTask