import "./featured.scss";
import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import { useState, useEffect } from "react";
import axios from "axios";

function Featured({ type, setGenre }) {
  const [content, setContent] = useState({});

  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const res = await axios.get(`/movies/random?type=${type}`, {
          headers: {
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setContent(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomContent();
  }, [type]);

  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select
            name="genre"
            id="genre"
            onChange={(e) => setGenre(e.target.value)}
          >
            <option value="">Genre</option>
            <option value="Action">Action</option>
            <option value="Comedy">Comedy</option>
            <option value="Crime">Crime</option>
            <option value="Dramas">TV Dramas</option>
          </select>
        </div>
      )}

      <img src={content.img} alt="" />
      <div className="info">
        <img src={content.imgTitle} alt="" />
        <div className="infoContainer">
          <h2 className="title">{content.title}</h2>
          <span className="year">{content.year}</span>
          <span role="presentation" className="info-spacer">
            {" "}
            |{" "}
          </span>
          <span className="limit">{content.limit}+</span>
          <span role="presentation" className="info-spacer">
            {" "}
            |{" "}
          </span>
          <span className="duration">{content.duration}</span>
          <span role="presentation" className="info-spacer">
            {" "}
            |{" "}
          </span>
          <span className="genre">{content.genre}</span>
        </div>
        <span className="desc">{content.desc}</span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Featured;
