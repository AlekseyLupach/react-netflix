import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function WidgetSm() {
  const [newUsers, SetNewUsers] = useState([]);

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get("/users?new=true", {
          headers: {
            token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        SetNewUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getNewUsers();
  }, []);

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUsers.map((user) => (
          <li className="widgetSmListItem" key={user._id}>
            <img
              src={
                user.profilePic ||
                "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"
              }
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.email}</span>
            </div>
            <div className="widgetSmUser">
              <span className="widgetSmUsername">
                {new Date(user.createdAt).toDateString()}
              </span>
            </div>
            <Link to="/users/" className="link">
              <button className="widgetSmButton">
                <Visibility className="widgetSmIcon" />
                More info view
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WidgetSm;
