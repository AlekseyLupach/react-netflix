import { useState, useContext } from "react";
import { useLocation, useHistory } from "react-router-dom";
import MovieForm from "../../components/movieForm/MovieForm";
import { updateMovie } from "../../context/movieContext/apiCalls";
import { MovieContext } from "../../context/movieContext/MovieContext";

function Product() {
  const [update, setUpdate] = useState(null);
  const history = useHistory();
  const location = useLocation();
  const movie = location.movie;
  const { dispatch } = useContext(MovieContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateMovie(movie._id, update, dispatch);
    history.push("/movies");
  };

  return (
    <MovieForm
      movie={movie}
      value={update}
      setValue={setUpdate}
      handleSubmit={handleSubmit}
      pageTitle={"Create Movie"}
    />
  );
}

export default Product;
