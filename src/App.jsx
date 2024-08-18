import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Cards from './Components/Cards/Cards'
import CardsData from './Components/Cards/Cards'

import './App.css'

export default function App() {
  return (
    <div className="screen">
      <Header />
      <Cards />
      <Footer />
    </div>
  )
}


