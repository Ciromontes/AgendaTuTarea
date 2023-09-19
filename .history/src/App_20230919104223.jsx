import React from 'react';
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize'
import { TaskContext } from '../context/TaskContext';

function App() {
  const { width, height } = useWindowSize()
  const { tasks } = useContext(TaskContext);
  const allTasksCompleted = tasks.every(task => task.completed);  // Comprueba si todas las tareas están completas

  return (
    <main className='bg-black min-h-screen'>
      {allTasksCompleted && <Confetti width={width} height={height} />}
      <div className='container mx-auto p-10'>
        <TaskForm/>
        <TaskList />
      </div>
    </main>
  )
}

export default App;

