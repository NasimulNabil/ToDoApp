import React, { useState } from 'react';
import './todo.css';

function Todo(){
    
        const [task, setTask] = useState(" ");
        const [tasklist, setTaskList] = useState([]);


        const handleChange = (e) => {
            setTask(e.target.value);
        }

        const Addtask =() => {
           if(task !== " "){
               const taskDetails= {
                   id: Math.floor(Math.random()*1000),
                   value: task
               }
               setTaskList([...tasklist, taskDetails]);
           }
        }
        const deletetask = (e, id) => {
            e.preventDefault();
            setTaskList(tasklist.filter((t) => t.id !== id));
          };
   
    return (
        <div className='todo'>
            <h2 style={{color:'white', textAlign:'center',paddingBottom:'0px', paddingTop:'20px'}}>ToDo App</h2>

            
                <input type="text" placeholder='Enter Text' onChange={(e)=> handleChange(e)} />

                <button className='add-btn' onClick={Addtask} >Add</button>
            
            <br />

            {tasklist !== [] ? (
        <ul>
          {tasklist.map((t) => (
            <li className="listitem">
              {t.value}
              <button className="delete" onClick={(e) => deletetask(e, t.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : null}
        </div>
    )
}

export default Todo
