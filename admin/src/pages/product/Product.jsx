import { Link, useLocation, useHistory } from "react-router-dom";
import "./Product.css";
import { useState, useContext } from "react";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { updateMovie } from "../../context/movieContext/apiCalls";
import { ClipLoader } from "react-spinners";
import upload from '../../upload.js'

function Product() {
  const [update, setUpdate] = useState(null);
  const history = useHistory();
  const location = useLocation();
  const movie = location.movie;
  const { dispatch } = useContext(MovieContext);
  const [img, setImg] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [imgTitle, setImgTitle] = useState(null);
  const [uploaded, setUploaded] = useState(0);
  const [progressBar, setProgressBar] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setUpdate({ ...update, [e.target.name]: value });
  };

  const handleUpload = (e) => {
    e.preventDefault();
    upload([
      { file: img, label: "img" },
      { file: imgTitle, label: "imgTitle" },
      { file: trailer, label: "trailer" },
    ], setUpdate, setUploaded, setProgressBar);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateMovie(movie._id, update, dispatch);
    history.push("/movies");
  };

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Movie</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Movie Title</label>
            <input
              type="text"
              placeholder={movie.title}
              name="title"
              onChange={handleChange}
            />
            <label>Year</label>
            <input
              type="text"
              placeholder={movie.year}
              name="year"
              onChange={handleChange}
            />
            <label>Genre</label>
            <input
              type="text"
              placeholder={movie.genre}
              name="genre"
              onChange={handleChange}
            />
            <label>Limit</label>
            <input
              type="text"
              placeholder={movie.limit + "+"}
              name="limit"
              onChange={handleChange}
            />
            <label>Duration</label>
            <input
              type="text"
              placeholder={movie.duration}
              name="duration"
              onChange={handleChange}
            />
            <label for="trailer">Trailer</label>
            <input
              type="file"
              name="trailer"
              id="trailer"
              placeholder={movie.trailer}
              onChange={(e) => setTrailer(e.target.files[0])}
            />
            <label for="img">Image</label>
            <input
              type="file"
              id="img"
              name="img"
              onChange={(e) => setImg(e.target.files[0])}
            />
            <label for="imgTitle">Title Image</label>
            <input
              type="file"
              id="imgTitle"
              name="imgTitle"
              onChange={(e) => setImgTitle(e.target.files[0])}
            />
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img
                src={img ? URL.createObjectURL(img) : movie.img}
                alt=""
                className="productUploadImg"
              />
            </div>
            {uploaded ? (
              <button className="productButton" onClick={handleSubmit}>
                Update
              </button>
            ) : (
              <button className="productButton" onClick={handleUpload}>
                Upload<span> {progressBar ? <ClipLoader size="14" /> : ""}</span>
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Product;
