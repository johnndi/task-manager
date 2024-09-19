import useTaskStore from "../../store/task.store";
import TodoList from "././TodoList.jsx"
const Home =()=>{
  const tasks=useTaskStore(state=>state.tasks);
  return(
    <div>
      {
        tasks.map(task=>(
          <TodoList key={task.id} task={task}/>
        ))
      }
    </div>
  )
}
export default Home