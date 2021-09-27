import "./home.scss";
import List from "../../components/list/List";
import Navbar from "../../components/navbar/Navbar";
import { useState, useEffect, useContext } from "react";
import Featured from "../../components/featured/Featured";
import { getRandomLists } from "../../context/listsContext/apiCalls";
import { ListsContext } from "../../context/listsContext/ListsContext";

function Home({ type, user }) {
  const [genre, setGenre] = useState(null);
  const { lists, dispatch } = useContext(ListsContext);

  useEffect(() => {
    getRandomLists(type, genre, dispatch);
  }, [type, genre, dispatch]);

  return (
    <div className="home">
      <Navbar />
      <Featured type={type} setGenre={setGenre} />
      {lists.map((list) => (
        <List
          key={list._id}
          list={list}
          listContent={list.content}
          user={user}
        />
      ))}
    </div>
  );
}

export default Home;
