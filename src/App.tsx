import { AnnouncementBar } from './sections/AnnouncementBar'
import { Navbar } from './sections/Navbar'
import { Hero } from './sections/Hero'
import { Brands } from './sections/Brands'
import { NewArrivals } from './sections/NewArrivals'
import { TopSelling } from './sections/TopSelling'
import { DressStyle } from './sections/DressStyle'
import { Reviews } from './sections/Reviews'
import Newsletter from './sections/Newsletter'
import Footer from './sections/Footer'
import './index.css'

function App() {
  return (
    <div className="page">
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <Brands />
      <NewArrivals />
      <TopSelling />
      <DressStyle />
      <Reviews />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App
