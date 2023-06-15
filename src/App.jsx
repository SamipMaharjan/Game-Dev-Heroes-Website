import { useState } from 'react'
import Header from './Components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Team from './Pages/Team'
import Events from './Pages/Events'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     <Header />
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
