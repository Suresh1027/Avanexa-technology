import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Taskform from './components/Taskform'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Taskform />} />
      </Routes>
    </>
  )
}

export default App