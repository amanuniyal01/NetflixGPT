import React from 'react'

function VideoTitle({ description, title }) {
    return (
        <div className='pt-125 px-5'>

            <h1 className='sm:text-4xl text-3xl md:text-6xl font-bold' style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.8)" }}>{title}</h1>
            <p className='md:text-2xl sm:text-xl text-xl sm:w-3/4 w-3/4 md:w-2/4 py-10 font-[500]'>{description}</p>

            <div className='flex gap-4'>
                <button className="flex items-center gap-2 bg-black text-white font-semibold px-8 py-4 rounded-md text-lg hover:bg-gray-200 transition">
                    ▶ Play
                </button>
                 <button className="flex items-center gap-2 bg-black text-white font-semibold px-8 py-2 rounded-md text-lg hover:bg-gray-200 transition">
                   ℹ More Info
                </button>

               
            </div>
        </div>
    )
}

export default VideoTitle