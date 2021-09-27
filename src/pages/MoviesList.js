import React, { useState, useEffect, useContext } from "react";
import * as CgIcons from "react-icons/cg";
import * as faIcons from "react-icons/fa";
import { IconContext } from "react-icons";
import "./MoviesList.css";
import {
  BASE_URL,
  MOVIE_TYPE,
  API_KEY,
  REST,
  IMG_URL,
} from "../components/Config";
// import { GlobalContext, GlobalProvider } from "../context/GlobalState";
import RenderEachMovie from "../components/RenderEachMovie";
import SortButtons from "../components/SortButtons";

export default function MoviesList() {
  const [movie, setMovie] = useState([]);
  const [page, setPage] = useState(1);
  const [totalpage, setTotalpage] = useState([]);
  const [sortlist, setSortlist] = useState(["", "", "", ""]);

  /*  const { addMovieToLikedList, likedList } = useContext(GlobalContext);

    const likedListDisabled = (id) => {
    // console.log(likedList);
    likedList.find((likedListItem) => {
      // console.log("likedListItem id:", likedListItem.id);
      // console.log("prop id:", id);
      // console.log(likedListItem.id === id ? true : false);
      return likedListItem.id === id ? true : false;
    });
  }; */

  useEffect(() => {
    setSortlist(["", "", "", ""]); // Reset sort btn if change page
    const url = `${BASE_URL}${MOVIE_TYPE}${API_KEY}${REST}` + page;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setMovie(data.results);
        setTotalpage(data.total_pages);
      });
  }, [page]);

  const handlePrev = () => {
    setPage(page - 1);
  };
  const handleNext = () => {
    setPage(page + 1);
  };

  return (
    <div className="moviesList">
      <SortButtons
        movie={movie}
        setMovie={setMovie}
        sortlist={sortlist}
        setSortlist={setSortlist}
      />
      <BordorLine />
      <div className="pageBtn">
        <IconContext.Provider value={{ color: "black", size: "1.75rem" }}>
          <button onClick={handlePrev} disabled={page === 1 ? true : false}>
            <CgIcons.CgArrowLeftR />
          </button>
          <p>
            {page} / {totalpage}
          </p>
          <button
            onClick={handleNext}
            disabled={page === totalpage ? true : false}
          >
            <CgIcons.CgArrowRightR />
          </button>
        </IconContext.Provider>
      </div>
      <BordorLine />
      {movie.map((item) => (
        <div key={item.id}>
          <RenderEachMovie item={item} />
        </div>
      ))}
    </div>
  );
}

const BordorLine = () => (
  <hr
    style={{
      margin: "10px 5% 10px 5%",
      width: "90%",
      border: "1px solid black",
    }}
  />
);

/* Day2 - Yuanfeng
class MoviesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      movie: [],
      page: 1,
    };
  }
  async componentDidMount() {
    const url = `${BASE_URL}${MOVIE_TYPE}${API_KEY}${REST}` + this.state.page;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ movie: data.results, loading: false });
  }
  async componentDidUpdate() {
    const url = `${BASE_URL}${MOVIE_TYPE}${API_KEY}${REST}` + this.state.page;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ movie: data.results, loading: false });
  }

  pre = () => {
    if (this.state.page > 1) {
      this.setState({ page: this.state.page - 1 });
    }
  };
  nex = () => {
    if (this.state.page < 500) {
      this.setState({ page: this.state.page + 1 });
    }
  };
  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }
    if (!this.state.movie.length) {
      return <div>Didn't get a movie</div>;
    }
    const { page, movie } = this.state;
    return (
      <div className="moviesList">
        <div className="sortBtn">
          <button></button>
          <button></button>
          <button></button>
          <button></button>
        </div>
        <div className="pageBtn">
          <hr />
          <button onClick={this.pre} disabled={page === 1 ? true : false}>
            Pre
          </button>
          <button onClick={this.nex} disabled={page === 500 ? true : false}>
            Nex
          </button>
          <hr />
        </div>
        {movie.map((movielist) => (
          <div id="Word">
            <img
              src={"https://image.tmdb.org/t/p/w500" + movielist.poster_path}
            />
            <br />
            <button>Liked</button>
            <button>Blocked</button>
            <div>{movielist.title}</div>
            <div>Release Date: {movielist.release_date}</div>
            <div>
              Vote Count: {movielist.vote_count}| Average Score:{" "}
              {movielist.vote_average}/10
            </div>
            <div>{movielist.overview}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default MoviesList; */
