import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

function MainContainer() {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    if (!movies) return null;

    const mainMovie = movies[12];
    const { title, overview, id } = mainMovie;

    return (
        <div className="relative h-screen w-full overflow-hidden">
            <VideoBackground movieId={id} />
            <VideoTitle title={title} description={overview} />
        </div>
    );
}



export default MainContainer