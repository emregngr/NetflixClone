import Sidebar from "./Components/Sidebar/sidebar";
import Topbar from "./Components/Topbar/topbar";
import "./App.css";
import Home from "./Pages/Home/home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import UserList from "./Pages/UserList/userList";
import User from "./Pages/User/user";
import NewUser from "./Pages/NewUser/newUser";
import Login from "./Pages/Login/login";
import { AuthContext } from "./Context/AuthContext/authContext";
import { useContext } from "react";
import ListList from "./Pages/ListList/listList";
import List from "./Pages/List/list";
import NewList from "./Pages/NewList/newList";
import MovieList from "./Pages/MovieList/movieList";
import { Movie } from "@material-ui/icons";
import NewMovie from "./Pages/NewMovie/newMovie";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        {user && (
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
              <Route path="/newlist">
                <NewList />
              </Route>
            </div>
          </>
        )}
      </Switch>
    </Router>
  );
}

export default App;