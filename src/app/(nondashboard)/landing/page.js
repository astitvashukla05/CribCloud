import React from 'react'
import Herosection from './Herosection'
import Features from './Features'
import Discover from './Discover'
import CallToActionSection from './CallToActionSection'

function landing() {
  return (
    <div>
      <Herosection/>
      <Features/>
      <Discover/>
      <CallToActionSection/>
    </div>
  )
}

export default landing