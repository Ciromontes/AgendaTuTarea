import {createContext} from 'react'

export const TaskContext = createContext()
export function TaskContextProvider(props) { 
    const[tasks, setTasks]= useState([]);

    function createTask(task){
        setTasks([...tasks, {
          title: task.title,
          id: tasks.length,
          description: task.description
        }])
      }
    

  return (
    <TaskContext.Provider>
        {props.children}
    </TaskContext.Provider>
    
  )
}

