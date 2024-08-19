import React from 'react'
import './Cards.css'

export default function Cards({img, name, description }) {
  return (
    <div className="card">
      <img src={img} alt="img" />
      <h2>{name}</h2>
      <p>{description}</p>
    </div>

  )
}


