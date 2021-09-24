import "./listItem.scss";
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
  DeleteOutline,
} from "@material-ui/icons";
import { useEffect, useState, useCallback, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { loginSuccess } from "../../authContext/AuthActions";
import { AuthContext } from "../../authContext/AuthContext";

function ListItem({ index, item, user }) {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});
  const { dispatch } = useContext(AuthContext);

  const getMovie = useCallback(async () => {
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
  }, [item]);

  useEffect(() => {
    getMovie();
    return () => {
      setMovie({});
    };
  }, [getMovie]);

  const findFavorit = () => {
    if (user.favorite.find((item) => item === movie._id)) {
      return true;
    }
    return false;
  };

  const handleFavorit = () => {
    const newMovie = {
      accessToken: JSON.parse(localStorage.getItem("user")).accessToken,
      favorite: [...user.favorite, movie._id],
    };
    const createFavoritLists = async () => {
      try {
        const res = await axios.put("/users/" + user._id, newMovie, {
          headers: {
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        dispatch(loginSuccess(res.data));
        await getMovie();
      } catch (err) {
        console.log(err);
      }
    };
    createFavoritLists();
  };

  const handleDelete = async () => {
    const newMovie = {
      accessToken: JSON.parse(localStorage.getItem("user")).accessToken,
      favorite: user.favorite.filter((fav) => fav !== movie._id),
    };
    try {
      const res = await axios.put("/users/" + user._id, newMovie, {
        headers: {
          token:
            "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      });
      dispatch(loginSuccess(res.data));
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
                <PlayArrow className="icon link" />
              </Link>
              {findFavorit() === true ? (
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
