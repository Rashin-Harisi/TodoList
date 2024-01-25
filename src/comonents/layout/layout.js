import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import './layout.css';



const Layout = ({children})=>{
    return (
        <div className='wholeApp'>
          <Header/>
          {children}
          <Footer/>  
        </div>
    )
};

export default Layout;