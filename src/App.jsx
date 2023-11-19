import React from 'react'
import './App.css'
import AuthProvider from './AuthProvider'
import Routes from './Roues'

function App() {
  
  return (
      
     <AuthProvider>
      <Routes />
     </AuthProvider>
  )
}

export default App
