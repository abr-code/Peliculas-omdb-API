import response from "../Mocs/response.js";

function MovieList({ list }) {
  // list = response.Search;
  return (
    <>
      {list.map((movie) => {
        return (
          <div className="movie-info" key={movie.imdbID}>
            <h2>{movie.Title}</h2>
            <img src={movie.Poster} />
            <p>{movie.Year}</p>
          </div>
        );
      })}
    </>
  );
}

export default MovieList;
