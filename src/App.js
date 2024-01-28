
import { useEffect, useState } from 'react';
import './App.css';
import Layout from './comonents/layout/layout';
import ToDo from './comonents/todoApp/todo';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filterParent,setFilterParent] = useState('all');
  const [filteredTasks,setFilteredTasks] = useState ([]);
  const [fresh, setFresh] = useState(0);


  useEffect(() => {
    let storedTasks = localStorage.getItem('tasks');
    if(storedTasks){
      storedTasks= JSON.parse(storedTasks)
    }else{
      storedTasks=[]
    }
    setTasks(storedTasks)
  }, [])
  useEffect(() => {
    if(filterParent === 'all'){
      setFilteredTasks(tasks)
    }
    if(filterParent === 'active'){
       const newActiveTasks= tasks.filter(task => !task.status)
       setFilteredTasks(newActiveTasks)
    }
    if(filterParent === 'completed'){
      const newCompletedTasks= tasks.filter(task => task.status)
      setFilteredTasks(newCompletedTasks)
   }
  }, [filterParent,tasks,fresh])


  const addTask = (taskTitle) => {
    const newTasks=[
      ...tasks,
      {
        id: uuidv4(),
        title: taskTitle,
        status: false,
      },
    ];
    setTasks(newTasks);
    localStorage.setItem('tasks',JSON.stringify(newTasks));// to save data in local storage to avoid missing data by refreshing the page.
  }

  const deleteTask=(taskId)=>{
    /*let newTasksList = tasks;
    delete newTasksList[tasks.findIndex((task)=>task.id===taskId)];
    newTasksList.filter((item)=>item);
    by this method React shows unexpected reaction and the code did not work , I get This Error: Uncaught TypeError: Cannot read properties of undefined (reading 'id')*/
    const newTasksList= tasks.filter ((task)=> task.id !== taskId)
    setTasks(newTasksList)
    localStorage.setItem('tasks',JSON.stringify(newTasksList));
  }

  const handelChangeStatus=(taskId)=>{
    let newTaskList = tasks;
    const taskIndex= tasks.findIndex((task)=> task.id===taskId);
    newTaskList[taskIndex].status = !newTaskList[taskIndex].status;
    setTasks(newTaskList)
    localStorage.setItem('tasks',JSON.stringify(newTaskList));
    setFresh(fresh+1)
  }
  return (
    <div className="App">
      <Layout tasks={tasks} setFilterParent={setFilterParent} filteredTasks={filteredTasks}>
        <ToDo tasks={filteredTasks} addTask={addTask} deleteTask={deleteTask}  handelChangeStatus={handelChangeStatus} />
      </Layout>
      <div className='designerName'>Designed by @Rashin </div>

    </div>
  );
}

export default App;
