import "./user.css";
import { CalendarToday, PermIdentity } from "@material-ui/icons";
import { useLocation, useHistory } from "react-router-dom";
import { useState, useContext } from "react";
import { UserContext } from "../../context/userContext/UserContext";
import { updateUser } from "../../context/userContext/apiCalls";
import UserForm from "../../components/userForm/userForm";

function User() {
  const [update, setUpdate] = useState(null);
  const history = useHistory();
  const location = useLocation();
  const user = location.user;
  const { dispatch } = useContext(UserContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setUpdate({ ...update, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(user._id, update, dispatch);
    history.push("/users");
  };

  return (
    <div className="user">
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src={
                user?.img || "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"
              }
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">{user.username}</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">{user.email}</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">
                {new Date(user.createdAt).toDateString()}
              </span>
            </div>
          </div>
        </div>
      </div>
      <UserForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        user={user}
      />
    </div>
  );
}

export default User;
