import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const ParentComponent = () => {

  return (
    <div>
      <h1>Dad</h1>
    </div>
  )
  
}


const ChildComponent = () => {


  return (
    <div>
      <h1>Kid</h1>
    </div>
  )
}


function App() {

  return (
    <div className='App'>
      <ParentComponent />
      <ChildComponent />

    </div>
  )
}

export default App
