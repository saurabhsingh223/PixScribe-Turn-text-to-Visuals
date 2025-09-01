import React from 'react'
import Header from '../components/Header'
import Steps from '../components/Steps'
import Desccription from '../components/Desccription'
import Testimonials from '../components/Testimonials'
import GenerateBtn from '../components/GenerateBtn'

const Home = () => {
  return (
    <div>
      <Header/>
      <Steps/>
      <Desccription/>
      <Testimonials/>
      <GenerateBtn/>
    </div>
  )
}

export default Home
