import React, { useState } from 'react'

export default function ListItem({content}) {
  const [finish , setFinish]=useState(false);
  const finishTask = () => {
    setFinish(true);



  }
  return (
    !finish ? // if(finish === false)
    <div className='m-3 p-1'>
      <div className='text-primary bg-light border border-primary'>{content}</div>
      <button onClick={finishTask} className='btn btn-success my-2'>Finish task</button>
   </div> :
   <div className='m-3 p-1'>
   <s className='text-danger bg-light border border-danger'>{content}</s>
   </div>
   
   
   )
}
