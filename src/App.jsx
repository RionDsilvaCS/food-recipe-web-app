import React from 'react'
import './App.css'
// import { Routes, Route, BrowserRouter, Navigate}  from 'react-router-dom';

import AuthProvider from './AuthProvider'
import Routes from './Roues'

function App() {
    // <BrowserRouter>

    //       {/* <RouteGuard exact path="/" Component={Recipes} />
    //       <RouteGuard path="/dashboard" Component={Dashboard} /> */}
    //       <Routes>
    //         <Route exact path="/" Component={Recipes} />
    //         <Route path="/dashboard" Component={Dashboard} />
    //         <Route path="/login" Component={Login}/>
    //         <Route path="/register" Component={Register}/>

    //       </Routes>
        
    //       </BrowserRouter>

  return (
      
     <AuthProvider>
      <Routes />
     </AuthProvider>
  )
}

export default App
