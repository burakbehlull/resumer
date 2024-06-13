import { useState } from 'react'
import './main.scss'
import Header from './pages/Header'
import { Outlet } from 'react-router-dom'
function App() {

  return (
    <>
	
      <header>
        <nav>
          <ul>
            <li><a href="#">RESUMER</a></li>
            <li><a href="#">Profile</a></li>
            <li><a href="#">Profile Name</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App
