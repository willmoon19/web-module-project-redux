import React from 'react';
import { connect } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { deleteMovie, addFavoriteMovies, displayFavoriteMovies } from "../actions/movieActions";

const Movie = (props) => {
    const { id } = useParams();
    const { push } = useHistory();

    const movie = props.movies.find(movie=>movie.id===Number(id));

    const handleDelete = (e) => {
        props.deleteMovie(movie.id); //why does movie.id work and not id same value
        push('/movies/');
    }

    const handleFavoriteClick = (e) => {
        e.preventDefault();
        props.addFavoriteMovies(movie);
        props.displayFavoriteMovies();
    }
    
    return(<div className="modal-page col">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">						
                    <h4 className="modal-title">{movie.title} Details</h4>
                </div>
                <div className="modal-body">
                    <div className="flexContainer">

                        <section className="movie-details">
                            <div>
                                <label>Title: <strong>{movie.title}</strong></label>
                            </div>
                            <div>
                                <label>Director: <strong>{movie.director}</strong></label>
                            </div>
                            <div>
                                <label>Genre: <strong>{movie.genre}</strong></label>
                            </div>
                            <div>
                                <label>Metascore: <strong>{movie.metascore}</strong></label>
                            </div>
                            <div>
                                <label>Description:</label>
                                <p><strong>{movie.description}</strong></p>
                            </div>
                        </section>
                        
                        <section>
                            <span className="m-2 btn btn-dark" onClick={handleFavoriteClick} >Favorite</span>
                            <span className="delete"><input type="button" className="m-2 btn btn-danger" value="Delete" onClick={handleDelete}/></span>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

const mapStateToProps = (state) => {
    return({
        movies: state.movies.movies,
        displayFavorites: state.favorites.displayFavorites
    })
}

export default connect(mapStateToProps, { deleteMovie, addFavoriteMovies, displayFavoriteMovies })(Movie);