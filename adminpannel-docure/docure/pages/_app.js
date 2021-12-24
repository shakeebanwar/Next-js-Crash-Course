import Layout from '../components/Layout'
import 'bootstrap/dist/css/bootstrap.min.css'
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
      "/page404",
      "/page500",
      "/register",
      "/forgetpassword",
      "/lockscreen",

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
