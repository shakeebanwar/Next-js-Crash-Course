import styles from '../styles/Home.module.css'
import Navbar from './Navbar'
import Hero from '../components/Hero'



export default function Layout({children}) {
  return (
    
    <>
    <Navbar/>
    <Hero/>

  <main>

  {children}
  </main>
  </>

  )
}
