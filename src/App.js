import NavBar from "./Components/NavBar";
import { useState, useEffect } from "react";
import ContactUs from "./Components/ContactUs";
import About from "./Components/about";
import Movies from "./Components/Movies";
function App() {
  const [page, setPage] = useState("about");
  const [movies, setMovies] = useState([]);
  const images = "https://image.tmdb.org/t/p/w500";
  const shoot = alert;
  useEffect(() => {
    const getData = async () => {
      const r = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=1fdad6cb84d1bb1cd3d72b9784227af1&language=en-US&page=1"
      );
      const data = await r.json(); //ef maður fetch-ar þarf alltaf að gera jason
      console.log(data);
      setMovies(data.results);
    };
    getData();
  }, []);
  console.log(movies);
  return (
    <div>
      <h2>Javascript / React </h2>
      <button onClick={() => shoot("Welcome dear student!")}>Greet us!</button>
      <Movies></Movies>
      <div className="maincontainer">
        {movies.map((movie) => {
          return (
            <div className="cards">
              <h1> {movie.title} </h1>
              <img src={images + movie.backdrop_path}></img>
              <p> {movie.overview} </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
//npm start - starta síðu og ef það kemur $ í terminal
export default App;
