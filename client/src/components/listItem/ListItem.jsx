import "./listItem.scss";
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
  DeleteOutline,
} from "@material-ui/icons";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addInMyList, deleteInMyList } from "../../redux/apiCalls";
import { storageGetItem } from "../../const";

function ListItem({ index, item, user }) {
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    let cleanupFunction = false;
    const getMovie = async () => {
      try {
        const res = await axios.get("/movies/find/" + item, {
          headers: {
            token:
              "Bearer " + storageGetItem.accessToken,
          },
        });
        if (!cleanupFunction) setMovie(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getMovie();

    return () => (cleanupFunction = true);
  }, [item]);

  const handleFavorit = async () => {
    const newMovie = {
      accessToken: storageGetItem.accessToken,
      favorite: [...user.favorite, movie._id],
    };
    addInMyList(user, newMovie, dispatch);
  };

  const handleDelete = async () => {
    const newMovie = {
      accessToken: storageGetItem.accessToken,
      favorite: user.favorite.filter((fav) => fav !== movie._id),
    };
    deleteInMyList(user, newMovie, dispatch);
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
                <PlayArrow className="icon link" />
              </Link>
              {user.favorite.find((item) => item === movie._id) ? (
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
