import "./app.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useContext } from "react";
import List from "./pages/list/List";
import User from "./pages/user/User";
import Home from "./pages/home/Home";
import Movie from "./pages/movie/Movie";
import Login from "./pages/login/Login";
import NewList from "./pages/newList/NewList";
import NewUser from "./pages/newUser/NewUser";
import Topbar from "./components/topbar/Topbar";
import NewMovie from "./pages/newMovie/NewMovie";
import UserList from "./pages/userList/UserList";
import ListList from "./pages/listList/ListList";
import Sidebar from "./components/sidebar/Sidebar";
import MovieList from "./pages/movieList/MovieList";
import { AuthContext } from "./context/authContext/AuthContext";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          {user ? <Redirect to="/" /> : <Login />}
        </Route>
        {user ? (
          <>
            <Topbar />
            <div className="container">
              <Sidebar />
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/users">
                <UserList />
              </Route>
              <Route path="/user/:userId">
                <User />
              </Route>
              <Route path="/newUser">
                <NewUser />
              </Route>
              <Route path="/movies">
                <MovieList />
              </Route>
              <Route path="/movie/:movieId">
                <Movie />
              </Route>
              <Route path="/newMovie">
                <NewMovie />
              </Route>
              <Route path="/lists">
                <ListList />
              </Route>
              <Route path="/list/:listId">
                <List />
              </Route>
              <Route path="/newList">
                <NewList />
              </Route>
            </div>
          </>
        ) : (
          <Redirect to="/login" />
        )}
      </Switch>
      )
    </Router>
  );
}

export default App;
