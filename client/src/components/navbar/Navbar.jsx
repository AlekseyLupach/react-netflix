import "./navbar.scss";
import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/userSlice";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt="netflix-logo"
          />
          <Link to="/" className="link">
            <span>Home</span>
          </Link>
          <Link to="/series" className="link">
            <span className="navbarmainLinks">Series</span>
          </Link>
          <Link to="/movies" className="link">
            <span className="navbarmainLinks">Movies</span>
          </Link>
          <Link to="/" className="link">
            <span>New and Popular</span>
          </Link>
          <Link to="my-list" className="link">
            <span>My List</span>
          </Link>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>KID</span>
          <Notifications className="icon" />
          <img
            src={
              user.profilePic ||
              "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"
            }
            alt=""
          />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              {user.isAdmin === true ? (
                <span>
                  <a href="http://localhost:4000/" className="link">
                    Dashboard
                  </a>
                </span>
              ) : (
                ""
              )}
              <Link to="/" className="link">
                <span>Settings</span>
              </Link>
              <Link to="login" className="link">
                <span onClick={() => dispatch(logout())}>Logout</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
