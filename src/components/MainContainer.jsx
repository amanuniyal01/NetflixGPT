import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

function MainContainer() {

    const movies = useSelector((store) => store.movies?.nowPlayingMovies)
    if (!movies) return
    const mainMovie = movies[10]

    const { title, overview,id } = mainMovie

    return (

        <div >





            <VideoTitle title={title} description={overview}/>
            <VideoBackground  movieId={id} />
        </div>
    )
}

export default MainContainer