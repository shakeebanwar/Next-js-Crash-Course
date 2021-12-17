import '../styles/globals.css'
import Layout from '../components/Layout'
import { Provider } from 'react-redux';
import withRedux from "next-redux-wrapper";
import store from '../redux/store';


function MyApp({ Component, pageProps }) {

 return (


        <Provider store={store}>
        <Layout>

          <Component {...pageProps} />
        </Layout>

        </Provider>

    )

 
}


//makeStore function that returns a new store for every request
const makeStore = () => store;

//withRedux wrapper that passes the store to the App Component
export default withRedux(makeStore)(MyApp);