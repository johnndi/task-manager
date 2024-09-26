import "./todo.css"
import useTaskStore from "../../store/task.store.js"
import Todo from "./Todo.jsx"
const TodoList =({task})=>{
    const {removeTasks, completedTasks}=useTaskStore()
return (
    <div className="line">
    
    <input type="checkbox" checked={task.completed} onChange={()=>completedTasks(task.id)}/>
<p className={task.completed ? "complete" : "incomplete"}>{task.text}</p>
<button onClick={()=>removeTasks(task.id)}>delete</button>

    

    </div>
)
}
export default TodoList