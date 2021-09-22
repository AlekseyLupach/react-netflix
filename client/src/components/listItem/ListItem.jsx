import "./listItem.scss";
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
  DeleteOutline,
} from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ListItem({ index, item, getFavorite }) {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});

  const getMovie = async () => {
    try {
      const res = await axios.get("/movies/find/" + item, {
        headers: {
          token:
            "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      });
      setMovie(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMovie();
  });

  const handleFavorit = () => {
    const newMovie = {
      ...movie,
      favorite: true,
    };
    const createFavoritLists = async () => {
      try {
        await axios.put("/movies/" + item, newMovie, {
          headers: {
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        await axios.post("/favorit/", movie, {
          headers: {
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        await getMovie();
      } catch (err) {
        console.log(err);
      }
    };
    createFavoritLists();
  };

  const handleDelete = async (id) => {
    const newMovie = {
      ...movie,
      favorite: false,
    };
    try {
      await axios.put("/movies/" + id, newMovie, {
        headers: {
          token:
            "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      });
      await axios.delete("/favorit/" + id, {
        headers: {
          token:
            "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      });
      await getFavorite();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={movie?.imgList} alt="" />
      {isHovered && (
        <>
          <video src={movie.trailer} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <Link to={{ pathname: "/watch", movie: movie }}>
                <PlayArrow className="icon" />
              </Link>
              {movie.favorite === true ? (
                <DeleteOutline
                  className="icon"
                  onClick={() => handleDelete(movie._id)}
                />
              ) : (
                <Add className="icon" onClick={handleFavorit} />
              )}
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>{movie.duration}</span>
              <span className="limit">+{movie.limit}</span>
              <span>{movie.year}</span>
            </div>
            <div className="desc">{movie.desc}</div>
            <div className="genre">{movie.genre}</div>
          </div>
        </>
      )}
    </div>
  );
}

export default ListItem;
