import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import './layout.css';



const Layout = ({children,tasks})=>{
    return (
        <div className='wholeApp'>
          <Header/>
          {children}
          <Footer tasks={tasks}/>  
        </div>
    )
};

export default Layout;