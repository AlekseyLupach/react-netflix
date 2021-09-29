import "./app.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";
import { useSelector } from "react-redux";
import MyList from "./pages/my-list/MyList";
import Register from "./pages/register/Register";

function App() {
  const { user } = useSelector((state) => state.user);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Home /> : <Redirect to="/register" />}
        </Route>
        <Route path="/register">
          {!user ? <Register /> : <Redirect to="/" />}
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        {user && (
          <Switch>
            <Route path="/movies">
              <Home type="movie" />
            </Route>
            <Route path="/series">
              <Home type="series" />
            </Route>
            <Route path="/watch">
              <Watch />
            </Route>
            <Route path="/my-list">
              <MyList />
            </Route>
          </Switch>
        )}
      </Switch>
    </Router>
  );
}

export default App;
