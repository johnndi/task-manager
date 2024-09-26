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
        <div >
            <form className="from" onSubmit={handleSubmit}>
            <div className="input">
            <input type="text" className="taskInput" value={text} onChange={(e)=>setText(e.target.value)} placeholder="add a task"/>
            </div>

<div className="button1">
<button className="btn" type="submit" >add</button>
</div>
            </form>
        </div>
    )
}
export default Todo