import React, { useState, useEffect, useCallback } from "react";
import "./MyList.scss";
import axios from "axios";
import Navbar from "../../components/navbar/Navbar";
import ListItem from "../../components/listItem/ListItem";

function MyList({ user }) {
  const [favorite, setFavorite] = useState([]);

  const getFavorite = useCallback(async () => {
    let data = [];
    try {
      const res = await axios.get("/favorit/", {
        headers: {
          token:
            "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      });
      res.data.filter((item) =>
        user._id === item.userId ? data.push(item) : setFavorite([])
      );
      setFavorite(data);
    } catch (err) {
      console.log(err);
    }
  }, [user._id]);

  useEffect(() => {
    getFavorite();
    return () => {
      setFavorite([]);
    };
  }, [getFavorite]);

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
                setFavorite={setFavorite}
                favorite={favorite}
                user={user}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyList;
