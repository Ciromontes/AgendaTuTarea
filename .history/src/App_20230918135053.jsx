import TaskList from './TaskList'
import TaskForm from './TaskForm'

function HolaMundo() {
 
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

export default HolaMundo


