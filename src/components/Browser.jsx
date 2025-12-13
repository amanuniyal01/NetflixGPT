import useNowPlayingMovies from "../Hooks/UseNowPlayingMovies"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"

const Browser = () => {

    useNowPlayingMovies()
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



            <MainContainer  />
            <SecondaryContainer />
        </div>
    )
}

export default Browser