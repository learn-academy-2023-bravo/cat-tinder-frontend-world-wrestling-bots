// app.js will run all the logic of the application

// imports
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Home from './pages/Home.js'
import Header from './components/Header'
import BotIndex from './pages/BotIndex.js'
import BotShow from './pages/BotShow.js'
import BotNew from './pages/BotNew.js'
import BotEdit from './pages/BotEdit.js'
import BotNotFound from './pages/BotNotFound.js'
import Footer from './components/Footer'
import mockBots from './mockBots.js'
import './App.css'

const App = () => {
  
  //state variable
  // eslint-disable-next-line no-unused-vars
  const [bots, setBots] = useState(mockBots)

  console.log(bots)

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/botindex" element={<BotIndex bots={bots}/>} />
        <Route path='/botshow/:id' element={<BotShow bots={bots}/>} />
        <Route path='/botnew' element={<BotNew />} />
        <Route path='/botedit' element={<BotEdit />} />
        <Route path='*' element={<BotNotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
