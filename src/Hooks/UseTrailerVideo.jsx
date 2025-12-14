import React, { useEffect } from 'react'
import { addTrailerVideo } from '../utils/movieSlice';
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';

const UseTrailerVideo = (movieId) => {
    const trailerVideo = useSelector((store) => store.movies?.getTrailerVideo)
    const dispatch = useDispatch();
    const getMovieVideos = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/" +
            movieId +
            "/videos?language=en-US",
            API_OPTIONS
        );
        const json = await data.json()
        console.log(json)

        const filterMovies = json.results.filter((video) => video.type === "Trailer")
        const trailer = filterMovies.length ? filterMovies[0] : json.results[0]
        dispatch(addTrailerVideo(trailer))


       

    }
     useEffect(() => {
            getMovieVideos()

        }, [])

    return (

        <div></div>
    )
}

export default UseTrailerVideo