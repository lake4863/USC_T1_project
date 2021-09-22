import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import MoviesList from "./pages/MoviesList";
import LikedList from "./pages/LikedList";
import BlockedList from "./pages/BlockedList";

function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/moviesList" component={MoviesList} />
          <Route path="/likedList" component={LikedList} />
          <Route path="/blockedList" component={BlockedList} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
