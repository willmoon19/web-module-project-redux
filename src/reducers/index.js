import { connect } from 'react-redux';
import { combineReducers } from 'redux';

import movieReducer from './movieReducer';
import reducer from "./moviesReducer";

const rootReducer = combineReducers({
    movies: movieReducer,
    favorites: reducer
})

export default rootReducer;