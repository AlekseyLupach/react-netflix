import "./watch.scss";
import { ArrowBackOutlined } from "@material-ui/icons";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

function Watch() {
  const location = useLocation();
  const movie = location.movie;

  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
      <video
        className="video"
        autoPlay
        controls
        src={movie.trailer}
      />
    </div>
  );
}

export default Watch;
