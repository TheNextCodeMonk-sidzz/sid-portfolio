import React, { useEffect, useRef, useState } from 'react'

const Typing_effect = ({text,delay}) => {

    const[displayText,setDisplayText]=useState(text);
    const speedRef=useRef({speed:1, endIndex:0});

    useEffect(()=>{
        const interval=setInterval((delay)=>{
            speedRef.current.endIndex++;
            setDisplayText(text.slice(0,speedRef.current.endIndex));
        },delay);

        return()=>{
            clearInterval(interval);
        }


    },[delay,text])

  return (
    <div>
        <h1>
            {displayText}
            <span className='text-red-400'> |</span>
        </h1>
        
    </div>
  )
}

export default Typing_effect