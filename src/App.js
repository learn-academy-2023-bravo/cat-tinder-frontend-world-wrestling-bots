import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import { Container } from 'reactstrap'
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
  const [bots, setBots] = useState(mockBots)
  const id = Math.floor(Math.random() * 9000000000) + 1000000000

  const createBot = (bot) => {
    setBots([{ ...bot, id }, ...bots])
  }

  const updateBot = (bot) => {
    const botToUpdate = bots.findIndex((t) => bot.id === t.id)
    const mockArray = [...bots]
    mockArray[botToUpdate] = bot
    setBots(mockArray)
    console.log(bot)
  }

  return (
    <>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/botindex" element={<BotIndex bots={bots}/>} />
          <Route path='/botshow/:id' element={<BotShow bots={bots}/>} />
          <Route path='/botnew' element={<BotNew createBot={createBot} />} />
          <Route path='/botedit/:id' element={<BotEdit bots={bots} updateBot={updateBot}/>} />
          <Route path='*' element={<BotNotFound />} />
        </Routes>
      </Container>
      <Footer />
    </>
  )
}

export default App;
