import "./MovieList.scss";
import MovieCard from "../movieCard/MovieCard";
import { useSelector } from "react-redux";

function MovieList() {
  const { movies } = useSelector((state) => state.movies);

  return (
    <div className="movie-container">
      {movies &&
        movies.map((movie) => {
          return <MovieCard key={movie.imdbID} movie={movie} />;
        })}
    </div>
  );
}

export default MovieList;
