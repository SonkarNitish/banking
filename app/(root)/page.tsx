import HeaderBox from '@/components/HeaderBox'
import React from 'react'

const Home = () => {
  const loggedIn = { firstName: 'Idk'};
  return (
    <section className="home">
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
            type="greeting"
            title="welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext = "Acess and manage your account and transactions efficiently."
          />
        </header>
      </div>
    </section>
  )
}

export default Home
