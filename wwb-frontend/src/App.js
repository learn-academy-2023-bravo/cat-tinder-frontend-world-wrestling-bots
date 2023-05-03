//imports
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'



const App = () => {
  
  return (
  <>
    <Header />
    <h2> This is before any routes</h2>
    <Routes>
     <Route path="/" element={<Home />} />
    
    </Routes>
    <Footer />
  </>
  )
}

export default App;
