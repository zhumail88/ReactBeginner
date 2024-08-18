import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Cards from './Components/Cards/Cards'
import SelectBox from './Components/SelectBox/SelectBox'

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


let CardDetails = () => {
  return (
    <div className="cardContainer">
      <div className="cardLayout">
        <Cards
          img={"src/assets/zhumail3.jpg"}
          name={"Zhumail"}
          description={"I’m currently grinding through my Bachelors in Edge Maxing. I'm out here mastering the art of Skibidi and flexing my top-tier GYAT skills. Catch me in the code zone, slaying bugs and boosting my rizz like a true GYAT rizzler."} />

        <Cards
          img={"src/assets/bobzy.jpg"}
          name={"Bobzy King"}
          description={"I am currently pursuing a Bachelors degree in Yapology and am in my 15th semester in the prestigious institute of Rizzlers University. I am deeply influnced by my great teacher Mr. Andrew Emery Tate The Third."} />

        <Cards
          img={"src/assets/zhariq.jpg"}
          name={"Zhariq"}
          description={"Skibidi gyatt rizz only in ohio duke dennis did you pray today livvy dunne rizzing up baby gronk sussy imposter pibby glitch in real life sigma alpha omega male grindset andrew tate."} />

        <Cards
          img={"src/assets/zafar.jpg"}
          name={"Zafar Bhai"}
          description={"This nigga finna come to your home but his bag to the side, bend you over and give you react tutorials. And probabaly fuck you afterwards."} />
      </div>

      <div className="selectBoxArea">
        <SelectBox/>  
      </div>

    </div>
  )
}