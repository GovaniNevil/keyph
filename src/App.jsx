import { useState } from 'react'
import{BrowserRouter as Router, Routes ,Route} from 'react-router-dom'
import Home from './assets/pages/home'
import Aboutus from './assets/pages/about-us'
import Services from './assets/pages/services'
import Contactus from './assets/pages/contact-us'
import Navbar from './assets/component/header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pages/about-us.jsx' element={<Aboutus />} />
          <Route path='/pages/services.jsx' element={<Services />} />
          <Route path='/pages/contact-us.jsx' element={<Contactus />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
