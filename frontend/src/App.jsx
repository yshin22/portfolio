import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './componenets/Header'
import Footer from './componenets/Footer'

function App() {
  return (
    <>
      <Header/>
      <div className='h-full'>
        <Outlet/>
      </div>
      <Footer/>
    </>
  )
}

export default App
