import "./list.scss";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import { useRef, useState, useEffect, useCallback } from "react";
import ListItem from "../listItem/ListItem";
import axios from "axios";

function List({ list, user }) {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  const listRef = useRef();
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

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 2) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };

  return (
    <div className="list">
      <span className="listTitle">{list.title}</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className="sliderArrow left"
          onClick={() => handleClick("left")}
          style={{ display: !isMoved && "none" }}
        />
        <div className="container" ref={listRef}>
          {list.content.map((item, i) => (
            <ListItem
              key={item}
              index={i}
              item={item}
              favorite={favorite}
              getFavorite={getFavorite}
              user={user}
            />
          ))}
        </div>
        <ArrowForwardIosOutlined
          className="sliderArrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}

export default List;
