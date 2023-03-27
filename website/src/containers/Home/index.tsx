import React from 'react'
import Features from './Features/index'
import Header from './Header/index'

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Features />
      </main>
    </>
  )
}

export default Home
