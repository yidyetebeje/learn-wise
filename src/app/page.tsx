import Image from 'next/image'
import NavBar from '../components/common/NavBar'
import Footer from '@/components/common/Footer'
import Hero from '@/components/home/Hero'
import Programs from '@/components/home/Programs'
import Features from '@/components/home/Features'
import FAQs from '@/components/home/FAQs'

export default function Home() {
  return (
    <main >
      <NavBar />

      <Hero />
      <Features />
      <Programs />
      <FAQs />
      <Footer />

     
    </main>
  )
}
