import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        getTrailerVideo: null,
        nowPopularMovies: null,
        TopRatedMovies: null,
        upcomingMovies: null,
        horrorMovies:null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.getTrailerVideo = action.payload

        },
        addPopularMovies: (state, action) => {
            state.nowPopularMovies = action.payload

        },
        addTopRatedMovies: (state, action) => {
            state.TopRatedMovies = action.payload

        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload

        },
         addHorrorMovies: (state, action) => {
            state.horrorMovies = action.payload

        }


    }
})

export default movieSlice.reducer;
export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies, addTopRatedMovies,addUpcomingMovies,addHorrorMovies } = movieSlice.actions