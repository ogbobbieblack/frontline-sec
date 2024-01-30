import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from 'react-router-dom'

import Layout from './utils/Layout'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}/>
  )
)

const App = () => {
  return <RouterProvider router={router}/>
}

export default App