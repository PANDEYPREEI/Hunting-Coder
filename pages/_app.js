import Home from '.'
import '../styles/globals.css'
import Navbar from './navbar'

//whatever file you import in _app.css it will become global 

function MyApp({ Component, pageProps }) {

  return( 
    <><Navbar /><Component {...pageProps} /></>)
}

export default MyApp
