import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Poster from './components/Poster'
import Recipe from './components/Recipe'
import BodyContent from './components/BodyContent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Poster></Poster>
      <BodyContent></BodyContent>
    </>
  )
}

export default App
