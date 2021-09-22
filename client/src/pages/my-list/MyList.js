import React, { useState, useEffect } from "react";
import "./MyList.scss";
import axios from "axios";
import Navbar from "../../components/navbar/Navbar";
import ListItem from "../../components/listItem/ListItem";

function MyList() {
  const [favorite, setFavorite] = useState([]);
  const getFavorite = async () => {
    try {
      const res = await axios.get("/favorit/", {
        headers: {
          token:
            "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      });
      setFavorite(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getFavorite();
  }, []);

  return (
    <div className="MyList">
      <Navbar />
      <div className="favorite">
        <h1 className="favoriteTitle">My List</h1>
        <div className="wrapper">
          <div className="container">
            {favorite.map((item, i) => (
              <ListItem
                key={item._id}
                index={i}
                item={item._id}
                getFavorite={getFavorite}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyList;
