import "./featured.scss";
import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import { useState, useEffect } from "react";
import axios from "axios";

function Featured({ type }) {
  const [content, setContent] = useState({});

  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const res = await axios.get(`/movies/random?type=${type}`, {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNDFiYmUwY2VjOWIyMjVlOWIyYzcxOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMTcwNDQzOSwiZXhwIjoxNjMyMTM2NDM5fQ.LHh11C3oXjEhkiZdfj4YCYgrSyTEl7siQYMNinbauRw",
          },
        });
        setContent(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomContent();
  }, [type]);
  console.log(content)
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}

      <img src={content.img} alt="" />
      <div className="info">
        <img src={content.imgTitle} alt="" />
        <div className="infoContainer">
        <h2 className="title">{content.title}</h2>
          <span className="year">{content.year}</span>
          <span role="presentation" class="info-spacer"> | </span>
          <span className="limit">{content.limit}+</span>
          <span role="presentation" class="info-spacer"> | </span>
          <span className="duration">{content.duration}</span>
          <span role="presentation" class="info-spacer"> | </span>
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
