import Navbar from './components/Navbar'
import Home from './components/Home'
import Blog from './components/Blog'
import Ham_menu from './components/Ham_menu'
import Banner from './components/Banner'
import './index.css'

function App() {

  return (
  <div className=''>
    <Navbar />
    <br /><br />
    {/* <Ham_menu /> */}
    <Banner></Banner>
    <br /><br />
  </div>
  )
}

export default App;
