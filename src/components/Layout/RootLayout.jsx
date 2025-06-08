import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar'
import Footer from '../Footer'

function RootLayout() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20 pb-16">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default RootLayout
