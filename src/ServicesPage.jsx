import React from 'react'
import BackGround from './components/background'
import Services from './components/services'


const ServicesPage = () => {
  return (
    <div>
      <BackGround to="/" name="HOME" page="SERVICES" pageName="Services" />
      <div className='bg-white'>
        <Services />
        </div>
    </div>
  )
}

export default ServicesPage