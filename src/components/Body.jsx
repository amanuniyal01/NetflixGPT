import React, { useEffect } from 'react'
import Login from './Login'
import Header from './Header'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Browser from './Browser'


const Body = () => {


  const appRouter = createBrowserRouter([
    {
      path: "/",
      element:(
        <>
        <Header/>
        <Login/>
        </>
      )
    },
    {
      path: "/browser",
      element: (
        <>
          <Header />
          <Browser />
        </>
      )
    }
  ])



  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body
