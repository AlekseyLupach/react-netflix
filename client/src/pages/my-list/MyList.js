import React from "react";
import "./MyList.scss";
import Navbar from "../../components/navbar/Navbar";
import ListItem from "../../components/listItem/ListItem";

function MyList({ user }) {
  return (
    <div className="MyList">
      <Navbar />
      <div className="favorite">
        <h1 className="favoriteTitle">My List</h1>
        <div className="wrapper">
          <div className="container">
            {user.favorite.map((item, i) => (
              <ListItem key={item} index={i} item={item} user={user} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyList;
