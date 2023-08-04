
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
import AndroidLayout from './components/AndroidLayout'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />

          <Route path='about' element={<AboutLayout />}>
            <Route index element={<Web />} />
            <Route path='android' element={<AndroidLayout />}>
              <Route index element={<Android />} />
              <Route path='oppo' element={<h4>These are opp phone details</h4>} />
              <Route path='mi' element={<h4>These are MI phone details</h4>} />
              <Route path='motorola' element={<h4>These are motorola phone details</h4>} />
              <Route path='lava' element={<h4>These are lava phone details</h4>} />
            </Route>
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
