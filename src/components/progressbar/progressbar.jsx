import '../progressbar/progressbar.css';
import React from "react";
import "react-step-progress-bar/styles.css";
import {ProgressBar,Step} from "react-step-progress-bar";
import {useNavigate} from 'react-router-dom';
const Progressbar = ({percentValue}) => {
  const navigate = useNavigate();
  return (
    <div className='progressWrap'>
     <ProgressBar 
         percent={percentValue}>
        <Step transition="scale">
         {({ accomplished }) => (
           <div className='progressNoDiv'>
            <span onClick={()=>{navigate('/')}}>1</span>
           </div>
         )}
        </Step>
        <Step transition="scale">
         {({ accomplished }) => (
           <div className='progressNoDiv'>
            <span onClick={()=>{navigate('/workspace')}}>2</span>
           </div>
         )}
        </Step>
        <Step transition="scale">
         {({ accomplished }) => (
           <div className='progressNoDiv'>
           <span onClick={()=>{navigate('/plan')}}>3</span>
           </div>
         )}
        </Step>
        <Step transition="scale">
         {({ accomplished }) => (
           <div className='progressNoDiv'>
            <span onClick={()=>{navigate('/final')}}>4</span>
           </div>
         )}
        </Step>
        </ProgressBar>
    </div>
  )
}

export default Progressbar
