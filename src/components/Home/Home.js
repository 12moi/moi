import React from 'react'
import './home.css'

export const Home = () => {
  return (
    <div className='home'>
        <div className='container'>
        <h5>Hello, I'm</h5>
      <h1>Moi Shadrack</h1>
      <h5 className='text-light' id="dev">Front-end Developer</h5>
      <a href='#contact' className='scroll__downd'>Scroll Downd</a>
        </div>
    </div>
  )
}
