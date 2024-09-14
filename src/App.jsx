import { useState } from 'react'
import{BrowserRouter as Router, Routes ,Route} from 'react-router-dom'
import Home from './assets/pages/home'
import Services from './assets/pages/services'
import Contactus from './assets/pages/contact-us'
import Navbar from './assets/component/header'
import Ourproduct from './assets/pages/ourproduct'
import Ourproject from './assets/pages/ourproject'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pages/services.jsx' element={<Services />} />
          <Route path='/pages/contact-us.jsx' element={<Contactus />} />
          <Route path='/pages/ourproduct.jsx' element={<Ourproduct />} />
          <Route path='/pages/ourproject.jsx' element={<Ourproject />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
