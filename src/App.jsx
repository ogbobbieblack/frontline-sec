import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from 'react-router-dom'

import Layout from './utils/Layout'
import Aos from "aos";
import "aos/dist/aos.css"; 
import { useEffect } from 'react';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}/>
  )
)

const App = () => {
  useEffect(() => {
    Aos.init({
      offset: 300,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, [])
  return <RouterProvider router={router}/>
}

export default App