import { useContext, useState } from "react";
import "./NewProduct.css";
import { createMovie } from "../../context/movieContext/apiCalls";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { ClipLoader } from "react-spinners";
import upload from "../../upload.js";

function NewProduct() {
  const [movie, setMovie] = useState(null);
  const [img, setImg] = useState(null);
  const [imgTitle, setImgTitle] = useState(null);
  const [imgList, setImgList] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [uploaded, setUploaded] = useState(0);
  const [progressBar, setProgressBar] = useState(null);
  const { dispatch } = useContext(MovieContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setMovie({ ...movie, [e.target.name]: value });
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
        { file: imgList, label: "imgList" },
        { file: trailer, label: "trailer" },
      ],
      setMovie,
      setProgressBar
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createMovie(movie, dispatch);
  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Movie</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Background Image</label>
          <input type="file" id="img" name="img" onChange={handleImg} />
        </div>
        <div className="addProductItem">
          <label>Title image</label>
          <input
            type="file"
            id="imgTitle"
            name="imgTitle"
            onChange={handleImgTitle}
          />
        </div>
        <div className="addProductItem">
          <label>List image</label>
          <input
            type="file"
            id="setImgBg"
            name="setImgBg"
            onChange={handleImgList}
          />
        </div>
        <div className="addProductItem">
          <label>Trailer</label>
          <input
            type="file"
            name="trailer"
            id="trailer"
            onChange={handleImgTrailer}
          />
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input
            type="text"
            placeholder="John Wich"
            name="title"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input
            type="text"
            placeholder="Description"
            name="desc"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Year</label>
          <input
            type="text"
            placeholder="Year"
            name="year"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Genre</label>
          <select name="genre" id="genre" onChange={handleChange}>
            <option>Select</option>
            <option value="Action">Action</option>
            <option value="Comedy">Comedy</option>
            <option value="Crime">Crime</option>
            <option value="Dramas">TV Dramas</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Duration</label>
          <input
            type="text"
            placeholder="Duration"
            name="duration"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Limit</label>
          <input
            type="text"
            placeholder="Limit"
            name="limit"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>is Series?</label>
          <select name="isSeries" id="isSeries" onChange={handleChange}>
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>
        {uploaded === 1 ? (
          <button className="addProductButton" onClick={handleUpload}>
            Upload<span> {progressBar ? <ClipLoader size="14" /> : ""}</span>
          </button>
        ) : (
          <button className="addProductButton" onClick={handleSubmit}>
            Create
          </button>
        )}
      </form>
    </div>
  );
}

export default NewProduct;
