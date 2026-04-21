import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header'
import Poster from './components/Poster'
import Recipe from './components/Recipe'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Poster></Poster>
      <Recipe title="This Summer Recipes" detail="We have all your Independence Day sweets covered."></Recipe>
    </>
  )
}

export default App
