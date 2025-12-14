import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        getTrailerVideo: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.getTrailerVideo = action.payload

        }

    }
})

export default movieSlice.reducer;
export const { addNowPlayingMovies,addTrailerVideo } = movieSlice.actions