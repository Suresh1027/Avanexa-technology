import axios from 'axios'
import style from '../components/Tasklist.module.css'
import React, { useEffect, useState } from 'react'

function Tasklist() {
  const [gettask, setGettask] = useState([])

  console.log(gettask);

  async function fetch() {
    try {
      const res = await axios.get('http://localhost:5000/api/task/gettask')
      setGettask(res.data)
    } catch (error) {
      console.log("task fetch unsuccessfull");
    }
  }
  fetch()
  async function handledelete(id) {
    try {
      await axios.delete(`http://localhost:5000/api/task/deletetask/${id}`)
      alert("successfully deleted")
      fetch()
    } catch (error) {
      alert('Error deleting task');
      console.error(error);
    }

  }

  return (
    <>
      {gettask.map((task) => (
        <div className={`${style.main}`}>
          <div key={task._id} className={`${style.tasklistcon}`}>
            <h3><span>title:</span>{task.title}</h3>
            <h3><span>description:</span>{task.description}</h3>
            <button onClick={() => handledelete(task._id)}>delete</button>
          </div>
        </div>
      ))}
    </>
  )
}

export default Tasklist