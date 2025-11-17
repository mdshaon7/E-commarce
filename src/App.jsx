import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router';
import Rootlayout from './layout/Rootlayout';
import Home from './page/Home';


let router =createBrowserRouter([
  {
    path: "/",
    Component: Rootlayout,
    children: [
      { index: true, Component: Home },
      // { path: "about", Component: About },
      
    ],
  },
]);
function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <RouterProvider router={router} />,
   </>
  )
}

export default App
