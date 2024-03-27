import "./MovieList.scss";
import MovieCard from "../movieCard/MovieCard";
import { useSelector } from "react-redux";

function MovieList() {
  const movieListing = useSelector((state) => state.movieListing.allMovie);

  return (
    <div className="movie-container">
      {movieListing &&
        movieListing.map((movie) => {
          return <MovieCard key={movie.imdbID} movie={movie} />;
        })}
    </div>
  );
}

export default MovieList;
