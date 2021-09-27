import "./watch.scss";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { ArrowBackOutlined } from "@material-ui/icons";

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
      <video className="video" autoPlay controls src={movie.trailer} />
    </div>
  );
}

export default Watch;
