import {useState} from "react"
import useTaskStore from "../../store/task.store.js"
const Todo=()=>{
    const [text, setText]=useState("")
    const addTasks =useTaskStore(state=>state.addTasks)
    const handleSubmit =(e)=>{
        e.preventDefault();
        if(!text.trim()) return;
        addTasks(text);
        setText("");
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
<input type="text" className="taskInput" value={text} onChange={(e)=>setText(e.target.value)} placeholder="add a task"/>
<button type="submit" >add</button>
            </form>
        </div>
    )
}
export default Todo