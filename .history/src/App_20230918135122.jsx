import TaskList from './TaskList'
import TaskForm from './TaskForm'

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


