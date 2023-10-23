import "./App.css";
import MovieList from "./component/MovieList";
import { useMovieList } from "./hooks/useMovieList";
import { useRef, useMemo } from "react";
import debounce from "./utilities/debounce";

function App() {
  const queryref = useRef("");
  const { list, generateList } = useMovieList();
  const debounceMemo = useMemo(() => {
    return debounce(generateList, 600);
  });

  const handleSumbit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const query = formData.get("query");
    form.reset();
    if (query === queryref.current) return;
    queryref.current = query;
    generateList({ query });
  };

  const handleOnChange = (event) => {
    const query = event.target.value;
    queryref.current = query;
    debounceMemo({ query });
  };

  return (
    <>
      <main>
        <form onSubmit={handleSumbit}>
          <input required onChange={handleOnChange} name="query" type="text" />
          <button>Search</button>
        </form>
        <div className="movies-container">
          {list && <MovieList list={list} />}
        </div>
      </main>
    </>
  );
}

export default App;
