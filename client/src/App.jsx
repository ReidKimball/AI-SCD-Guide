import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import Header from './components/Header'
import Menu_Services from './components/Menu_Services'
import About from './components/About'
import Profile from './components/Profile'
import HealthDashboard from './components/HealthDashboard'
import Landing from './components/Landing'
import Recipe_Service from './components/Recipe_Service'
import Meal_Service from './components/Meal_Service'
import Coach_Service from './components/Coach_Service'
import AI_Services from './components/AI_Services'
import Footer from './components/Footer'
//import { useAuth0 } from '@auth0/auth0-react'
import { Navigate } from 'react-router'

function App() {
  // Add state to track if menu should be shown
  //const [showMenu, setShowMenu] = useState(false)
  //const { user, isAuthenticated, loginWithRedirect, isLoading } = useAuth0();

  return (
    <>    
      <BrowserRouter>
        <Header />        
        <Menu_Services /> {/* this needs to be protected by a login */}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path='/about' element={<About />} />
          {/* these below need to be protected by a login */}          
          <Route path="/profile" element={<Profile />} />
          <Route path="/menu_services" element={<Menu_Services />} />
          <Route path="/recipe_service" element={<Recipe_Service />} />
          <Route path="/meal_service" element={<Meal_Service />} />
          <Route path="/coach_service" element={<Coach_Service />} />
          <Route path="/ai_services" element={<AI_Services />} />
        </Routes>
        <Footer />              
      </BrowserRouter>      
    </>
  )
}

export default App