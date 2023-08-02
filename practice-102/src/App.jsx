
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Layout from './components/Layout'
import Mission from './components/Mission'
import Contact from './components/Contact'
import Goal from './components/Goal'
import Contribution from './components/Contribution'
import MissionLayout from './components/MissionLayout'
import AboutLayout from './components/about/AboutLayout'
import About from './components/about/About'
import Web from './components/about/Web'
import Iphone from './components/about/Iphone'
import Games from './components/about/Games'
import Android from './components/about/Android'
import GoalDetails from './components/about/GoalDetails'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />

          <Route path='about' element={<AboutLayout />}>
            <Route index element={<About />} />
            <Route path='web' element={<Web />} />
            <Route path='android' element={<Android />} />
            <Route path='iphone' element={<Iphone />} />
            <Route path='games' element={<Games />} />
          </Route>

          <Route path='mission' element={<MissionLayout />}>
            <Route index element={<Mission />} />
            <Route path='goal' element={<Goal />} />
            <Route path='goal/:id' element={<GoalDetails />} /> 
            <Route path='contribution' element={<Contribution />}/>
          </Route>

          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
