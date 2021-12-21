import Layout from '../components/Layout'
import '../public/static/assets/css/bootstrap.min.css'
import '../public/static/assets/css/font-awesome.min.css'
import '../public/static/assets/css/feathericon.min.css'
import '../public/static/assets/plugins/morris/morris.css'
import '../public/static/assets/css/style.css'
import '../public/static/assets/img/favicon.png'




import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {



  return (
  
  <Layout>

    <Component {...pageProps} />
  </Layout>

  )
}

export default MyApp
