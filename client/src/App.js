import "./app.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useContext } from "react";
import Home from "./pages/home/Home";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";
import MyList from "./pages/my-list/MyList";
import Register from "./pages/register/Register";
import { AuthContext } from "./context/authContext/AuthContext";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Home user={user} /> : <Redirect to="/register" />}
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
              <Home type="movie" user={user} />
            </Route>
            <Route path="/series">
              <Home type="series" user={user} />
            </Route>
            <Route path="/watch">
              <Watch />
            </Route>
            <Route path="/my-list">
              <MyList user={user} />
            </Route>
          </Switch>
        )}
      </Switch>
    </Router>
  );
}

export default App;
