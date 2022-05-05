import Navbar from '../components/Navbar'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return(
    <div className='dark:bg-slate-800' id='root'>
      <Navbar />
      <Component {...pageProps} />
    </div>
  ) 
}

export default MyApp
