import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getMovies } from "../../context/movieContext/apiCalls";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { ListContext } from "../../context/listContext/ListContext";
import { createList } from "../../context/listContext/apiCalls";
import ListForm from "../../components/listForm/ListForm";

function NewList() {
  const [list, setList] = useState(null);
  const history = useHistory();

  const { dispatch } = useContext(ListContext);
  const { movies, dispatch: dispatchMovie } = useContext(MovieContext);

  useEffect(() => {
    getMovies(dispatchMovie);
  }, [dispatchMovie]);

  const handleChange = (e) => {
    const value = e.target.value;
    setList({ ...list, [e.target.name]: value });
  };

  const handleSelect = (e) => {
    let value = Array.from(e.target.selectedOptions, (option) => option.value);
    setList({ ...list, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createList(list, dispatch);
    history.push("/lists");
  };

  return (
    <ListForm
      movies={movies}
      handleSubmit={handleSubmit}
      handleSelect={handleSelect}
      handleChange={handleChange}
      pageTitle={"New List"}
    />
  );
}

export default NewList;
