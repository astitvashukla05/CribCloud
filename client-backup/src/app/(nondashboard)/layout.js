import NavBar from '@/components/NavBar'
import { NAVBAR_HEIGHT } from '@/lib/constants'
import React from 'react'

function Layout({ children }) {
  return (
    <div className={`h-full w-full`}>
        <NavBar/>
        <main className={`h-full flex w-full flex-col `}
             style={{ paddingTop: `${NAVBAR_HEIGHT}px` }}>
            {children}
        </main>
    </div>
  )
}

export default Layout