import React from 'react';
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize'

function App() {
  const { width, height } = useWindowSize()
  return (
    <main className='bg-black min-h-screen'>
      <Confetti width={width} height={height} />
      <div className='container mx-auto p-10'>
        <TaskForm/>
        <TaskList />
      </div>
    </main>
  )
}

export default App;
