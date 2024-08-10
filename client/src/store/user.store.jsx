import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const userStore = (set) => ({
  users:{name:"john"} ,
    tasks:[],
  setUser: (newUser) =>
    set(() => {
      return { users: newUser };
    }),
    addTask: (task) => {
        set((previousState) => {
          return { tasks: [task, ...previousState.tasks] };
        });
      },
      completeTask: (taskId) => {
        set((state) => {
          const updatedTasks = state.tasks.map((currentTask) => {
            if (currentTask.id == taskId) currentTask.completed = true;
            return currentTask;
          });
          return { tasks: updatedTasks };
        });
      },
    
      incompleteTask: (taskId) => {
        set((state) => {
          const updatedTasks = state.tasks.map((currentTask) => {
            if (currentTask.id == taskId) currentTask.completed = false;
            return currentTask;
          });
          return { tasks: updatedTasks };
        });
      },
    
      deleteTask: (taskId) => {
        set((state) => {
          const updatedTasks = state.tasks.filter(
            (currentTask) => currentTask.id !== taskId,
          );
          return { tasks: updatedTasks };
        });
      },
    });


const useUserStores = create(
  devtools(
    persist(userStore, { name: "users", tasks:"tasks " })
  )
);

export default useUserStores;
