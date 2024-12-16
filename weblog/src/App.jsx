import Navbar from './components/Navbar'
import Home from './components/Home'
import Blog from './components/Blog'
// import Slider from './components/Slider'
import Banner from './components/Banner'
import './index.css'

function App() {

  return (
  <div className=''>
    <Navbar />
    <br /><br />
    <Banner></Banner>
    <br /><br />
    {/* <Slider></Slider> */}
    <br /><br />
  </div>
  )
}

export default App;
