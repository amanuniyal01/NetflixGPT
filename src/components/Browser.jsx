import UseHorrorMovies from "../Hooks/UseHorroMovies"
import useNowPlayingMovies from "../Hooks/UseNowPlayingMovies"
import UsePopularMovies from "../Hooks/UsePopularMovies"
import UseTopRatedMovies from "../Hooks/UseTopRatedMovies"
import UseUpcomingMovies from "../Hooks/UseUpcomingMovies"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"

const Browser = () => {

    useNowPlayingMovies()
    UseTopRatedMovies()
    UsePopularMovies()
    UseUpcomingMovies()
    UseHorrorMovies()
    return (
        <div>
            {/* 

MainContainer
    -VideoBackground
    -MovieTitle

MovieContainer
    -MovieLists
    -Cards
    
*/}



            <MainContainer />
            <SecondaryContainer />
        </div>
    )
}

export default Browser