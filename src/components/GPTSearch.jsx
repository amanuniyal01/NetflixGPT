import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTMovieSuggestion from './GPTMovieSuggestion'

function GPTSearch() {
  return (
    <div className=''>
      <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/30c8b9f4-3db9-4b3b-a1ee-8fa56531b712/web/IN-en-20251201-TRIFECTA-perspective_c7623e8e-c406-43d2-9d9a-0140ce19ac84_medium.jpg"
          alt="Netflix Hero"
          className="w-full h-full object-cover"
        />
      <GPTSearchBar />
      <GPTMovieSuggestion />

    </div>
  )
}

export default GPTSearch