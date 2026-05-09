import './App.css'
import Header from './components/Header'
import Poster from './components/Poster'
import BodyContent from './components/BodyContent'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Header></Header>
      <Poster></Poster>
      <BodyContent></BodyContent>
      <Footer></Footer>
    </div>
  )
}

export default App
