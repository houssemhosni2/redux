const initialstate={
    filter:"",
    task:[
    {id:1, description:"Learn React JS", isDone: true},
    {id:2, description:"Learn Redux", isDone: true},
    {id:3, description:"Learn Node JS", isDone: false}
  ]};
const TodoReducer=(state=initialstate, action)=>{
    switch(action.type){
        case "ADD_TASK":
            return {...state, task: state.task.concat({id: (Math.max.apply(null, state.task.map(x => x.id))>0)?(Math.max.apply(null, state.task.map(x => x.id))+1):1, description:action.payload, isDone: false})}
        case "DEL_TASK": 
            return {...state, task: state.task.filter(x=>x.id !== action.payload)}
        case "UPDATE_ISDONE": 
            return {...state, task: state.task.map(x=>x.id === action.payload?{...x,isDone:!x.isDone}:x)}
        case "FILTER":
            return  {...state, filter:!action.payload}
        case "INIT_FILTER":
            return  {...state, filter:""}
        case "EDIT_DISC":
            return  {...state, task:state.task.map(x=>x.id === action.payload?{...x,description:action.tempo}:x)}
        default:
            return state
    }
}
export default TodoReducer;