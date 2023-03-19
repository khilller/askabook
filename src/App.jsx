import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1> 🔍 Ask a Book?</h1>
      <div>
        <img src="././public/arm.png" className='logo'></img>
      </div>
      
      <div className="card">
      <gradio-app src="https://aheman20-arm.hf.space"></gradio-app>
      </div>
      <p className="read-the-docs">
        <a href='https://twitter.com/khillller'> 
        @akhilHemanth
        </a>
      </p>
    </div>
  )
}

export default App
