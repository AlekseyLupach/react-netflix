import { useLocation, useHistory } from "react-router-dom";
import "./Product.css";
import { useState, useContext } from "react";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { updateMovie } from "../../context/movieContext/apiCalls";
import { ClipLoader } from "react-spinners";
import upload from "../../upload.js";

function Product() {
  const [update, setUpdate] = useState(null);
  const history = useHistory();
  const location = useLocation();
  const movie = location.movie;
  const { dispatch } = useContext(MovieContext);
  const [img, setImg] = useState(null);
  const [imgList, setImgList] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [imgTitle, setImgTitle] = useState(null);
  const [uploaded, setUploaded] = useState(0);
  const [progressBar, setProgressBar] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setUpdate({ ...update, [e.target.name]: value });
  };

  const handleImg = (e) => {
    setImg(e.target.files[0]);
    setUploaded((prev) => prev + 1);
  };

  const handleImgTitle = (e) => {
    setImgTitle(e.target.files[0]);
    setUploaded((prev) => prev + 1);
  };

  const handleImgList = (e) => {
    setImgList(e.target.files[0]);
    setUploaded((prev) => prev + 1);
  };

  const handleImgTrailer = (e) => {
    setTrailer(e.target.files[0]);
    setUploaded((prev) => prev + 1);
  };

  const handleUpload = (e) => {
    e.preventDefault();
    upload(
      [
        { file: img, label: "img" },
        { file: imgTitle, label: "imgTitle" },
        { file: imgList, label: "setImgList" },
        { file: trailer, label: "trailer" },
      ],
      setUpdate,
      setProgressBar
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateMovie(movie._id, update, dispatch);
    history.push("/movies");
  };
  console.log(uploaded);
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Update movie</h1>
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
            <label>Description</label>
            <input
              type="text"
              placeholder={movie.desc}
              name="desc"
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
            <select name="genre" id="genre" onChange={handleChange}>
              <option>Select</option>
              <option value="Action">Action</option>
              <option value="Comedy">Comedy</option>
              <option value="Crime">Crime</option>
              <option value="Dramas">TV Dramas</option>
            </select>
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
              onChange={handleImgTrailer}
            />
            <label for="img">Image</label>
            <input
              type="file"
              id="img"
              name="img"
              onChange={handleImg}
            />
            <label for="imgTitle">Title Image</label>
            <input
              type="file"
              id="imgTitle"
              name="imgTitle"
              onChange={handleImgTitle}
            />
            <label for="imgList">List Image</label>
            <input
              type="file"
              id="imgList"
              name="imgList"
              onChange={handleImgList}
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
            {uploaded === 1 ? (
              <button className="productButton" onClick={handleUpload}>
                Upload
                <span> {progressBar ? <ClipLoader size="14" /> : ""}</span>
              </button>
            ) : (
              <button className="productButton" onClick={handleSubmit}>
                Save update
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Product;
