// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { FrontPage } from './components/FrontPage';
import { GenresList } from './components/GenresList'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <FrontPage/>
      <GenresList text="ESTO ES UNA PRUEBA" />
    </>
  )
}

export default App
