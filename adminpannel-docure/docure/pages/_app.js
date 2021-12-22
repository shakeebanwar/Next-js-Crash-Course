import Layout from '../components/Layout'
import '../public/static/assets/css/bootstrap.min.css'
import '../public/static/assets/css/font-awesome.min.css'
import '../public/static/assets/css/feathericon.min.css'
import '../public/static/assets/plugins/morris/morris.css'
import '../public/static/assets/css/style.css'
import '../public/static/assets/img/favicon.png'


function MyApp({ Component, pageProps, router }) {



  const renderNav = (currentScreen) => {
    const noNavScreens = [
      "/login",
      "/model",
      "/register",
      "/forgetpassword",
      "/lockscreen"
    ];
    
    return !noNavScreens.includes(currentScreen)
  }


  return (
    <>

      <Layout isNav={renderNav(router.route)}>

        <Component {...pageProps} />
      </Layout>

    </>


  )
}

export default MyApp
