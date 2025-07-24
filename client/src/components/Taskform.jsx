import React, { useEffect, useState } from 'react'
import style from '../components/Taskform.module.css'
import Tasklist from './Tasklist'
import axios from 'axios';
function Taskform() {
  const [task, setTask] = useState({
    title: "",
    description: ""
  })
  console.log(task);


  function handlechange(e) {
    setTask({ ...task, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/task/createtask', task)
      alert("created successfully")
    } catch (error) {
      console.log("created unsuccessfull");
    }

  }
  return (
    <>
      <form onSubmit={handleSubmit} className={`${style.maincon}`}>
        <div className={`${style.taskformcon} `}>
          <div className={`${style.taskcon}`}>
            <h1>Create Task</h1>
            <label htmlFor="">Title</label>
            <input type="text" name='title' value={task.title} onChange={handlechange} />
            <label htmlFor="">description</label>
            <input type="text" name='description' value={task.description} onChange={handlechange} />
            <button type='submit'>Add task</button>
            <Tasklist />
          </div>
        </div>
      </form>
    </>
  )
}

export default Taskform