import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import CardDetails from './Components/CardDetails/CardDetails'
import './App.css'

export default function App() {
  return (
    <div className="screen">
      <Header />
      
      <CardDetails />
            
      <Footer />
    </div>
  )
}


