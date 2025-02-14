import './App.css'
import * as React from 'react'
import AppAppBar from './components/AppAppbar'
import AppFooter from './components/AppFooter'
import MainContent from './components/MainContent'
import ReservationDetails from './components/ReservationDetails'
import {  Routes, Route, HashRouter as Router } from "react-router-dom";

function App() {

  return (
    <React.Fragment>
      <AppAppBar />
      <Router>
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/reservation-details" element={<ReservationDetails />} />
        </Routes>
      </Router>
     <AppFooter />
    </React.Fragment>
  )
}

export default App
