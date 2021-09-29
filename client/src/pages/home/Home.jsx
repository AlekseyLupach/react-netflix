import "./home.scss";
import { useState, useEffect } from "react";
import List from "../../components/list/List";
import Navbar from "../../components/navbar/Navbar";
import { getRandomLists } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import Featured from "../../components/featured/Featured";

function Home({ type }) {
  const [genre, setGenre] = useState(null);
  const dispatch = useDispatch();
  const { lists } = useSelector((state) => state.lists);

  useEffect(() => {
    getRandomLists(type, genre, dispatch);
  }, [type, genre, dispatch]);

  return (
    <div className="home">
      <Navbar />
      <Featured type={type} setGenre={setGenre} />
      {lists.map((list) => (
        <List key={list._id} list={list} listContent={list.content} />
      ))}
    </div>
  );
}

export default Home;
