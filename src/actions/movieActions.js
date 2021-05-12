export const DELETE_MOVIE = "DELETE_MOVIE";
export const ADD_MOVIE = "ADD_MOVIE";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";
export const DELETE_FAVORITE = "DELETE_FAVORITE";

export const deleteMovie = (id)=>{
    return({type: DELETE_MOVIE, payload:id});
}

export const addMovie = (movie) => {
    return({type: ADD_MOVIE, payload: movie});
}

export const addFavoriteMovies = (movies) => {
    return({type:ADD_FAVORITE, payload: movies});
}

export const displayFavoriteMovies = () => {
   
    return({type:TOGGLE_FAVORITE});
}

export const deleteFavorite = (id) => {
    return({type:DELETE_FAVORITE, payload: id});
}