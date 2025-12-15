import React, { useEffect, useState } from 'react'

function VideoTitle({ description, title }) {
    const [showinfo, setShowInfo] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowInfo(false)
        },8000)

        return () => clearTimeout(timer);
    }, [])



    return (
        <>
            {showinfo && (<div className="
      absolute
      top-0
      w-screen
      aspect-video
      bg-gradient-to-r from-black
      px-4 sm:px-8 md:px-16
      pt-24 sm:pt-32 md:pt-92
    ">


                <h1
                    className="
          text-white
          text-3xl sm:text-4xl md:text-6xl
          font-bold
        "
                    style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.8)" }}
                >
                    {title}
                </h1>

                {/* Description */}
                <p
                    className="
          text-white
          text-sm sm:text-lg md:text-2xl
          mt-4 md:mt-8
          w-full sm:w-3/4 md:w-1/2
          font-medium
        "
                >
                    {description}
                </p>

                {/* Buttons */}
                <div className="flex gap-3 mt-6 md:mt-10">
                    <button
                        className="
            flex items-center gap-2
            bg-white text-black
            px-4 py-2 sm:px-6 sm:py-3
            text-sm sm:text-lg
            rounded-md
            hover:bg-gray-300
            transition
          "
                    >
                        ▶ Play
                    </button>

                    <button
                        className="
            flex items-center gap-2
            bg-gray-400 bg-opacity-70 text-white
            px-4 py-2 sm:px-6 sm:py-3
            text-sm sm:text-lg
            rounded-md
            hover:bg-gray-500
            transition
          "
                    >
                        ℹ More Info
                    </button>
                </div>
            </div>)}
        </>

    )
}

export default VideoTitle
