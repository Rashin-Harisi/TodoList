
import { useEffect, useState } from 'react';
import './App.css';
import Layout from './comonents/layout/layout';
import ToDo from './comonents/todoApp/todo';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    setTasks([
      {
        id: uuidv4(),
        title: 'Default task',
        status: true, //Boolean
      },
      {
        id: uuidv4(),
        title: 'Default task number2',
        status: false, //Boolean
      }
    ])
  }, [])

  const addTask = (taskTitle) => {
    setTasks([
      ...tasks,
      {
        id: uuidv4(),
        title: taskTitle,
        status: false,
      },
    ])
  }

  const deleteTask=(taskId)=>{
    /*let newTasksList = tasks;
    delete newTasksList[tasks.findIndex((task)=>task.id===taskId)];
    newTasksList.filter((item)=>item);
    by this method React shows unexpected reaction and the code did not work , I get This Error: Uncaught TypeError: Cannot read properties of undefined (reading 'id')*/
    const newTasksList= tasks.filter ((task)=> task.id !== taskId)
    setTasks(newTasksList)
  }
  return (
    <div className="App">
      <Layout tasks={tasks}>
        <ToDo tasks={tasks} addTask={addTask} deleteTask={deleteTask} />
      </Layout>
      <div className='designerName'>Designed by @Rashin </div>

    </div>
  );
}

export default App;
