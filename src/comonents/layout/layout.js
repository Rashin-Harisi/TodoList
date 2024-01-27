import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import './layout.css';



const Layout = ({children,tasks,setFilterParent,filteredTasks})=>{
    return (
        <div className='wholeApp'>
          <Header/>
          {children}
          <Footer tasks={tasks} setFilterParent={setFilterParent} filteredTasks={filteredTasks}/>  
        </div>
    )
};

export default Layout;