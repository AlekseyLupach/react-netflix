import { useContext, useState } from "react";
import MovieForm from "../../components/movieForm/MovieForm";
import { createMovie } from "../../context/movieContext/apiCalls";
import { MovieContext } from "../../context/movieContext/MovieContext";

function NewProduct() {
  const [movie, setMovie] = useState(null);
  const { dispatch } = useContext(MovieContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createMovie(movie, dispatch);
  };

  return (
    <MovieForm
      value={movie}
      setValue={setMovie}
      handleSubmit={handleSubmit}
      pageTitle={"Create Movie"}
    />
  );
}

export default NewProduct;
