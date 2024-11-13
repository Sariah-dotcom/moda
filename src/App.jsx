import React from 'react'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Collections from './components/Collections'
import Footer from './components/Footer'
import AdditionalDetails from './components/AdditionalDetails'

export default function App() {
  return (
    <div>
      <Nav />
      <div className='p-[0.7rem] flex flex-col gap-[5rem]'>
        <Hero />
        <Collections />
        <AdditionalDetails />
        <Footer />

      </div>
      
    </div>
  )
}
