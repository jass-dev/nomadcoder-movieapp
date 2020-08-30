import React from "react";
import PropTypes from "prop-types";
import "./Movie.css"

function Movie ({id, year, title, summary, poster}){
    return <div className = "movies_movie">
        <h3 className = "movie_title">{title}</h3>
        <img className="movie_poster" src={poster} alt="poster"></img>
        <p className="movie_summary">{summary}</p>

    </div>;
}

Movie.propTypes = {
    id : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    year : PropTypes.number.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired
}

export default Movie;