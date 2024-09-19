import {create} from "zustand"

const useTaskStore = create(set =>({
    tasks:[],
    addTasks:(text)=>set((state)=>({tasks: [...state.tasks, {text, completed:false, id:Date.now()}]})),
    removeTasks:(id)=>set((state)=>({tasks:state.tasks.filter(t=> t.id !==id)})),
    completedTasks:(id)=>set((state)=>({tasks:state.tasks.map(t=> t.id ===id?{...t, completed:!t.completed}:t)}))
}))  

export default useTaskStore