import React, { useState } from 'react';
import { PlayCircle ,SpeakerSimpleX,SpeakerHigh } from "@phosphor-icons/react";
import './App.css';
import Cards from './components/card';

function App() {
  const containerStyle = {
   
    // backgroundSize: 'cover',
    backgroundImage: `url("/road3.jpeg")`,
    // background-repeat: no-repeat;
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    animation: 'zoom-animation 20s ease-in-out infinite',
    position: 'relative',
    height: '100vh',
    overflow:'hidden'
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex:0,
    overflow:'hidden'
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 1,
    textAlign: 'center',
    padding: '50px',
    fontWeight:"bold",
    marginTop:"8%",
    marginLeft:'21%',
    color: 'white',
  };
  const [playbtn,setPlaybtn]=useState(false)
  const [stopAnimation,setStopAnimation]=useState(false)
const handlePlay=()=>{
    setPlaybtn(true);
    setStopAnimation(true);
}
const handlePlayAgain = () => {
  setPlaybtn(false);
  setStopAnimation(false)
}
  return (
    <div style={containerStyle}>
      <div style={overlayStyle}  className={` ${stopAnimation ? '' : 'zoom-animation'}`} >
      <div className=' d-flex justify-content-between text-white p-2'>
          <div className='d-flex'>
            <div className='text-white'>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGgZEc7Bx2AXck1REuj55qZHDuZJVjIoH0jQ&s' alt='cloudify' className='image rounded-circle'/>
            </div>
            <div className='px-2'>
            <p className='name' >Cloudifyapp Pvt.Ltd.<br/><span className='span-font'>By John Doe</span></p>
            </div>
        
          </div>
          <div className=''>
            {playbtn ? <SpeakerHigh size={23}/> : <SpeakerSimpleX size={23} onClick={handlePlay}/>}
          </div>
        </div>
        {playbtn ? <Cards onPlayAgain={handlePlayAgain} />:(
          <><div className="w-50" style={contentStyle}>
            <h1 className="fs-1">Addition and Subtraction facts within 20</h1>
            <p className="fs-4">Test your knowledge with the following questions , tap a card to flip it and uncover the answer Good Luck!</p>
            <a href="#" class="btn btn-warning rounded-pill" onClick={handlePlay}>
              <span ><PlayCircle size={32}className='rotate-icon' /></span>
              <span className='px-1'>Let's play</span></a>
          </div><div className='bottomDiv'>
              <p className='text-white'>Powered by CLOUDIFYAPPS</p>
            </div></>
            )}
      </div>
      
    </div>
  );
}

export default App;
