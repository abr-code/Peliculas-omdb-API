import { useState } from "react";
import { config } from "../config/config-env";

export function useMovieList() {
  const [list, setList] = useState([]);

  const generateList = ({ query }) => {
    if (!query) return;
    fetch(`http://www.omdbapi.com/?apikey=${config.token}&s=${query}&r=json`)
      .then((resp) => resp.json())
      .then((data) => setList(data.Search));
  };

  return { list, generateList };
}
