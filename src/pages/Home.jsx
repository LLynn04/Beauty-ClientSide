import React from 'react'
import Banner from '../components/Banner'
import Categories from '../components/ProductViews/Categories'
import TopProduct from '../components/ProductViews/TopProducts'
import PromotionBanner from '../components/PromotinBanner'
import AllProducts from '../components/ProductViews/AllProducts'

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

      {/* top products */}
      <section>
        <TopProduct />
      </section>

      {/* promotion banner */}
      <section>
        <PromotionBanner />
      </section>

      {/* all products */}
      <section>
        <AllProducts />
      </section>
      
    </main>
  )
}

export default Home
