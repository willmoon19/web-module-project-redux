import { ADD_FAVORITE, TOGGLE_FAVORITE, DELETE_FAVORITE } from "../actions/movieActions";
import reducer from "./movieReducer";

const initialState = {
    favorites: [],
    displayFavorites: false
}

const reducers = (state = initialState, action) => {
    switch(action.type){
        case ADD_FAVORITE:
            return{
                ...state, favorites: [...state.favorites, action.payload]
            };
        case TOGGLE_FAVORITE:
            return{
                ...state, displayFavorites: !state.displayFavorites
            }
        case DELETE_FAVORITE:
            return{
                ...state,
                favorites: state.favorites.filter(item => (action.payload !== item.id))
            }
        default: return state;
    }
}

export default reducers;