import "./App.scss";
import MovieList from "./components/MovieList";

function App() {
  return (
    <div className="container">
      <h1 className="heading">Top Rated Movies</h1>
      <MovieList />
    </div>
  );
}

export default App;
