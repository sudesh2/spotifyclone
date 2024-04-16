import React from 'react'
import Sidebar from './component/Sidebar'
import Main_page from './component/Main_page'
import Footerplayer from './component/Footerplayer'
import './csss/hero.css'

export default function Hero() {


  return (<div className='hero'>
    <Sidebar />
    <Main_page />
    <div className='footer'>
      <Footerplayer />
    </div>
    
  </div>
   
  );
};
