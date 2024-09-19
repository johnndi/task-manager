import useTaskStore from "../../store/task.store.js"
const TodoList =({task})=>{
    const {removeTasks, completedTasks}=useTaskStore()
return (
    <div>
    <span>
    <input type="checkbox" checked={task.completed} onChange={()=>completedTasks(task.id)}/>
<p className={task.completed ? "complete" : "incomplete"}>{task.text}</p>
<button onClick={()=>removeTasks(task.id)}>delete</button>

    </span>

    </div>
)
}
export default TodoList