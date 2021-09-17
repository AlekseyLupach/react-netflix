import { Link, useLocation, useHistory } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { ListContext } from "../../context/listContext/ListContext";
import { updateList } from "../../context/listContext/apiCalls";
import { getMovies } from "../../context/movieContext/apiCalls";
import { MovieContext } from "../../context/movieContext/MovieContext";
import "./list.css";

function List() {
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
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">list</h1>
        <Link to="/newlist">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>List Title</label>
            <input
              type="text"
              placeholder={list.title}
              name="title"
              onChange={handleChange}
            />
            <label>Genre</label>
            <input
              type="text"
              placeholder={list.genre}
              name="genre"
              onChange={handleChange}
            />
             <label>Type</label>
            <select name="type" onChange={handleChange}>
              <option>Type</option>
              <option value="movie">Movie</option>
              <option value="series">Series</option>
            </select>
          </div>
          <div className="addProductItem">
            <label>Content</label>
            <select
              multiple
              name="content"
              onChange={handleSelect}
              style={{ height: "280px" }}
            >
              {movies.map((movie) => (
                <option value={movie._id} key={movie._id}>
                  {movie.title}, ({movie.genre})
                </option>
              ))}
            </select>
          </div>
          <div className="productFormRight">
            <button className="productButton" onClick={handleSubmit}>
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default List;
