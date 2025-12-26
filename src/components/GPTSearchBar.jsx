import React from 'react'

function GPTSearchBar() {
  return (
    <div className="z-30 pt-40  flex justify-center px-4">
      <form className="bg-white/10  backdrop-blur-md  w-full max-w-3xl border-white/20 rounded-lg p-4 flex flex-col sm:flex-row gap-2">
        
        <input
          className="flex-grow font-bold bg-white p-4 rounded-lg"
          name="searchbar"
          placeholder="What Would You Like to Watch Today?"
          type="text"
        />

        <button className="bg-red-700 text-white font-bold px-10 py-4 rounded-lg">
          Search
        </button>

      </form>
    </div>
  )
}

export default GPTSearchBar
