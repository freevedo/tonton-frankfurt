import './App.css'
import * as React from 'react'
import AppAppBar from './components/AppAppbar'
import AppFooter from './components/AppFooter'
import MainContent from './components/MainContent'

function App() {

  return (
    <React.Fragment>
      <AppAppBar />
      <MainContent />
     <AppFooter />
    </React.Fragment>
  )
}

export default App
