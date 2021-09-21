import { useState, useContext, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { updateList } from "../../context/listContext/apiCalls";
import { getMovies } from "../../context/movieContext/apiCalls";
import ListForm from "../../components/listForm/ListForm";
import { ListContext } from "../../context/listContext/ListContext";
import { MovieContext } from "../../context/movieContext/MovieContext";

function UpdateList() {
  const [update, setUpdate] = useState(null);
  const history = useHistory();
  const location = useLocation();
  const list = location.list;
  const { dispatch } = useContext(ListContext);
  const { movies, dispatch: dispatchMovie } = useContext(MovieContext);

  useEffect(() => {
    getMovies(dispatchMovie);
  }, [dispatchMovie]);

  const handleChange = (e) => {
    const value = e.target.value;
    setUpdate({ ...update, [e.target.name]: value });
  };

  const handleSelect = (e) => {
    let value = Array.from(e.target.selectedOptions, (option) => option.value);
    setUpdate({ ...list, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateList(list._id, update, dispatch);
    history.push("/lists");
  };

  return (
    <ListForm
      list={list}
      movies={movies}
      handleSubmit={handleSubmit}
      handleSelect={handleSelect}
      handleChange={handleChange}
      pageTitle={"Update list"}
    />
  );
}

export default UpdateList;
