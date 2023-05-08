import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Container, Spinner } from 'reactstrap'
import Home from './pages/Home.js'
import Header from './components/Header'
import BotIndex from './pages/BotIndex.js'
import BotShow from './pages/BotShow.js'
import BotNew from './pages/BotNew.js'
import BotEdit from './pages/BotEdit.js'
import BotNotFound from './pages/BotNotFound.js'
import Footer from './components/Footer'
import './fonts/JapaneseRobot-0WWdX.ttf'
import './fonts/JapaneseRobotItalic-owwXz.ttf'
import './App.css'

const App = () => {
  const [bots, setBots] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    readBot()
  }, [])

  const readBot = () => {
    fetch('http://localhost:3000/bots')
      .then(response => response.json())
      .then(payload => {
        setBots(payload)
        setLoading(false)
      })
      .catch(error => console.log("Bots are loose! AKA Bot read errors", error))
  }

  const createBot = (createdBot) => {
    fetch('http://localhost:3000/bots', {
      body: JSON.stringify(createdBot),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then(response => response.json())
    .then(payload => {
      setBots(payload)
      setLoading(false)
    })
    .catch(error => console.log("Bots are loose! AKA Bot read errors", error))
  }

  const updateBot = (selectedBot) => {
    fetch(`http://localhost:3000/bots/${selectedBot.id}`, {
      body: JSON.stringify(selectedBot),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
      .then(response => response.json())
      .then(() => readBot())
      .catch(error => console.log("Bots are loose! AKA Bot read errors", error))
  }

  const deleteBot = (id) => {
    fetch(`http://localhost:3000/bots/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
      .then(response => response.json())
      .then(() => readBot())
      .catch(error => console.log("Bots are loose! AKA Bot read errors", error))
    })
  }

  if (loading || bots.length === 0) {
    return (
      <Spinner>
        Loading...
      </Spinner>
    )
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
          <Route path='/botedit/:id' element={<BotEdit bots={bots} updateBot={updateBot} deleteBot={deleteBot}/>} />
          <Route path='*' element={<BotNotFound />} />
        </Routes>
      </Container>
      <Footer />
    </>
  )
}

export default App
