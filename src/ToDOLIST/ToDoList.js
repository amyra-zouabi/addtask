import React, { useState } from 'react';
import ListItem from '../listItem/ListItem';
import Swal from 'sweetalert2'

export default function ToDoList() {

  const [List , setList]=useState([]);
  const [newTask , setNewTask]=useState("");
   const getTask =(e)=>{
    setNewTask(e.target.value);
   }
   const addTask=(e)=>{
    e.preventDefault();
    if(newTask.length === 0){
       Swal.fire({
        icon :'error', title : 'Ooups' , text : 'cannot insert an empty task'
       })
    }
    else if(List.includes(newTask)){
      Swal.fire({
        icon :'error', title : 'Ooups' , text : 'Duplicated task !'})}
   
   else if(List.length === 5) {
    Swal.fire({
    icon :'error', title : 'Ooups' , text : 'Done for today '})}
   else{
    setList([...List,newTask]);
    document.getElementById('myForm').reset();
    Swal.fire({
        icon :'success', title : '' , text : 'Congrats !!'
       })
   }}
  return (
    <div className="container text-center my-3">
    <p className='display-1'>TODAY'S TASKS</p>
    <p className='h6 mb-3'>(TO DO)</p>
    <form id='myForm'>
      <input placeholder='Add your today `s here ..' 
       className='form-control' onChange={getTask} type='text' />
      <button onClick={addTask} className='btn btn-primary my-3'>Add Task</button>
    </form>
    {List.map((el) => (<ListItem content={el} />)
    )}
    {
        List.length == 0 ? <p>5 tasks availabels</p> :
        List.length == 1 ? <p>4 tasks availabels</p> :
        List.length == 2 ? <p>3 tasks availabels</p> :
        List.length == 3 ? <p>2 tasks availabels</p>  :
        List.length == 4 ? <p>1 tasks availabels</p>  : 
        <p>No tasks availabe , goof work for today !</p>
        
    }
  </div>
  )
}
