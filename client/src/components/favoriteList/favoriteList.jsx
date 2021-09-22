import "./favoriteList.scss";
import {
  PlayArrow,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
  DeleteOutline,
} from "@material-ui/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function FavoriteList({ index, movie, getFavorite }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleDelete = async (id) => {
    try {
      await axios.delete("/favorit/" + id, {
        headers: {
          token:
            "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      });
      getFavorite();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 250 - 50 + index * 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={movie?.imgList} alt="" />
      {isHovered && (
        <>
          <video src={movie.trailer} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <Link to={{ pathname: "/watch", movie: movie }} className="link">
                <PlayArrow className="icon" />
              </Link>
              <DeleteOutline
                className="icon"
                onClick={() => handleDelete(movie._id)}
              />
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

export default FavoriteList;
