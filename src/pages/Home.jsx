import React from 'react'
import Banner from '../components/Banner'
import Categories from '../components/Categories'

const Home = () => {
  return (
    <main>
      {/* banner */}
      <section>
        <Banner />
      </section>
      
      {/* categories */}
      <section>
        <Categories />
      </section>
      
    </main>
  )
}

export default Home
