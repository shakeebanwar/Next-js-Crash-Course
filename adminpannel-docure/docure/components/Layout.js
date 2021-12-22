import Navbar from './Navbar'



export default function Layout({ children, isNav = true }) {


  return (

    <>
      {isNav && <Navbar />}

      <main>

        {children}
      </main>
    </>

  )
}
