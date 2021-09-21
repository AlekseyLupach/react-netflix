import { useContext, useState } from "react";
import "./NewProduct.css";
import { createMovie } from "../../context/movieContext/apiCalls";
import { MovieContext } from "../../context/movieContext/MovieContext";
import upload from "../../upload.js";
import MovieForm from "../../components/movieForm/MovieForm";

function NewProduct() {
  const [uploaded, setUploaded] = useState(0);
  const [movie, setMovie] = useState(null);
  const [img, setImg] = useState(null);
  const [imgTitle, setImgTitle] = useState(null);
  const [imgList, setImgList] = useState(null);
  const [trailer, setTrailer] = useState(null);
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
      setProgressBar,
      setUploaded
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createMovie(movie, dispatch);
  };

  return (
    <MovieForm
      handleUpload={handleUpload}
      handleImgTrailer={handleImgTrailer}
      handleImgList={handleImgList}
      handleImgTitle={handleImgTitle}
      handleImg={handleImg}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      uploaded={uploaded}
      progressBar={progressBar}
      pageTitle={"Create Movie"}
    />
  );
}

export default NewProduct;
