import { useState, useEffect } from "react";
import { movieApi } from "../../api/Axios";
import { APIKey } from "../../api/MovieApiKey";
import { useDispatch } from "react-redux";
import { addMovie } from "../../store/Reducer";
import MovieList from "../movieList/MovieList";
import "./Home.scss";

function Home() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const fetchMovie = async () => {
    const searchKey = search ? search : "Thor";
    const res = await movieApi.get(
      `?apikey=${APIKey}&s=${searchKey}&type=movie`
    );

    setTimeout(() => {
      dispatch(addMovie(res.data.Search));
    }, 500);
  };

  useEffect(() => {
    fetchMovie();
  }, [search]);
  return (
    <div className="home-container">
      <h3 style={{ margin: "1rem 0" }}>Movies</h3>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <MovieList />
    </div>
  );
}

export default Home;
