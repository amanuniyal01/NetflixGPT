import React, { useState } from 'react'

const Login = () => {
  const [isOpen, setIsOpen] = useState(false)

  const ToggleSignUp = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="relative flex items-center flex-col justify-center">
     

      <div className="h-[100vh] w-[100vw] relative">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/8d617e19-3c3c-4c28-8998-c9b14dbc7200/web/IN-en-20250901-TRIFECTA-perspective_48d84d4e-9558-46b8-a0f3-8b2dc8478431_small.jpg"
          alt="Netflix Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
      </div>

      {/* Auth Form */}
      <form
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
        bg-black/80 text-white flex flex-col p-10 w-[90%] max-w-md rounded-lg shadow-lg"
      >
        <h1 className="my-4 font-bold text-3xl">
          {isOpen ? 'Sign Up' : 'Sign In'}
        </h1>

        {isOpen && (
          <input
            type="text"
            placeholder="Full Name"
            className="my-2 p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
          />
        )}

        <input
          type="email"
          placeholder="Email or phone number"
          className="my-2 p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          className="my-2 p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
        />

        <button className="bg-red-600 hover:bg-red-700 transition my-6 h-12 rounded-md w-full font-semibold">
          {isOpen ? 'Sign Up' : 'Sign In'}
        </button>

        <div className="flex justify-between text-sm text-gray-400">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="accent-red-600" />
            <span>Remember me</span>
          </label> 
          <a href="#" className="hover:underline">
            Need help?
          </a>
        </div>

        <p className="text-gray-400 mt-6 text-sm">
          {isOpen ? (
            <span>
              Already a user?{' '}
              <a
                onClick={ToggleSignUp}
                className="text-white hover:underline cursor-pointer"
              >
                Sign In Now
              </a>
            </span>
          ) : (
            <span>
              New to Netflix?{' '}
              <a
                onClick={ToggleSignUp}
                className="text-white hover:underline cursor-pointer"
              >
                Sign Up Now
              </a>
            </span>
          )}
        </p>
      </form>
    </div>
  )
}

export default Login
