import { useState } from 'react'
import { AppBar, Toolbar } from '@mui/material'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AppBar >
        Game Dev Heroes
          <Toolbar flex>
            Home
          </Toolbar>
      </AppBar>
     
    </>
  )
}

export default App
