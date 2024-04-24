import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { 
  createBrowserRouter, 
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import './index.css'
import HomeScreen from './screens/HomeScreen.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path='/' element={<App/>}>
      <Route index path='/' element={<HomeScreen/>}/>
    </Route>

  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
