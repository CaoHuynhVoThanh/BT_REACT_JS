import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Poster from './components/Poster'
import BodyContent from './components/BodyContent'
import Footer from './components/Footer'
import SignUp from './components/SignUp'
import Login from './components/Login'

function App() {
  const [activeModal, setActiveModal] = useState(null)

  return (
    <div className="app">
      <Header
        onLogin={() => setActiveModal('login')}
        onSubscribe={() => setActiveModal('signup')}
      ></Header>
      <Poster></Poster>
      <BodyContent></BodyContent>
      <Footer></Footer>
      <SignUp
        isOpen={activeModal === 'signup'}
        onClose={() => setActiveModal(null)}
        onSwitchToLogin={() => setActiveModal('login')}
      ></SignUp>
      <Login
        isOpen={activeModal === 'login'}
        onClose={() => setActiveModal(null)}
      ></Login>
    </div>
  )
}

export default App
