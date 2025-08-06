import React from 'react'
import Herosection from './Herosection'
import Features from './Features'
import Discover from './Discover'
import CallToActionSection from './CallToActionSection'
import Footer from './Footer'

function landing() {
  return (
    <div>
      <Herosection/>
      <Features/>
      <Discover/>
      <CallToActionSection/>
      <Footer/>
    </div>
  )
}

export default landing