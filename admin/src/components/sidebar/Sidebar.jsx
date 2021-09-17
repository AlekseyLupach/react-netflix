import "./sidebar.css";
import {
  Home,
  Timeline,
  PermIdentity,
  List,
  AddCircleOutline,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
  PlayCircleOutline,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState } from "react";

function Sidebar() {
  const [activeButtonId, setActiveButtonId] = useState("");

  const handleButtonClick = (e) => {
    setActiveButtonId(e.target.id);
  };

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li
                id="1"
                className={
                  "1" === activeButtonId
                    ? " sidebarListItem active"
                    : "sidebarListItem"
                }
                onClick={handleButtonClick}
              >
                <Home className="sidebarIcon" />
                Home
              </li>
            </Link>
            <Link to="/users" className="link">
              <li
                id="2"
                className={
                  "2" === activeButtonId
                    ? " sidebarListItem active"
                    : "sidebarListItem"
                }
                onClick={handleButtonClick}
              >
                <PermIdentity className="sidebarIcon" />
                Users
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Movies Menu</h3>
          <ul className="sidebarList">
            <Link to="/movies" className="link">
              <li
                id="3"
                className={
                  "3" === activeButtonId
                    ? " sidebarListItem active"
                    : "sidebarListItem"
                }
                onClick={handleButtonClick}
              >
                <PlayCircleOutline className="sidebarIcon" />
                Movies
              </li>
            </Link>
            <Link to="/newproduct" className="link">
              <li
                className={
                  "4" === activeButtonId
                    ? " sidebarListItem active"
                    : "sidebarListItem"
                }
                onClick={handleButtonClick}
                id="4"
              >
                <AddCircleOutline className="sidebarIcon" />
                Create Movie
              </li>
            </Link>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Lists Menu</h3>
          <ul className="sidebarList">
            <Link to="/lists" className="link">
              <li
                className={
                  "5" === activeButtonId
                    ? " sidebarListItem active"
                    : "sidebarListItem"
                }
                onClick={handleButtonClick}
                id="5"
              >
                <List className="sidebarIcon" />
                Lists
              </li>
            </Link>
            <Link to="/newlist" className="link">
              <li
                className={
                  "6" === activeButtonId
                    ? " sidebarListItem active"
                    : "sidebarListItem"
                }
                onClick={handleButtonClick}
                id="6"
              >
                <AddCircleOutline className="sidebarIcon" />
                Create List
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
