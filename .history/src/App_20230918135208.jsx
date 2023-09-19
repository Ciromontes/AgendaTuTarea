import TaskList from './TaskList'
import TaskForm from './TaskForm'
import {tasks as data} from './tasks'

function App() {
 
    const[tasks, setTasks]= useState([]);

    useEffect(() =>{
        setTasks(data)
    },[])

  return (
    <>
      <TaskForm/>
      <TaskList/>
    </>
  )
}

export default App;


