import React, { useState, useEffect } from "react";
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

export default function MoviesList() {
  const [movie, setMovie] = useState([]);
  const [page, setPage] = useState(1);
  const [totalpage, setTotalpage] = useState([]);
  const [sortlist, setSortlist] = useState(["", "", "", ""]);

  useEffect(() => {
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
  // clear the other buttons active status if another one is pressed
  // first time press does not change ↓ arrow direction
  const sortBtnTitle = () => {
    if (sortlist[0] === false) {
      setSortlist([true, "", "", ""]);
    } else {
      // first time & true
      setSortlist([false, "", "", ""]);
    }
  };
  const sortBtnVote = () => {
    if (sortlist[1] === false) {
      setSortlist(["", true, "", ""]);
    } else {
      setSortlist(["", false, "", ""]);
    }
  };
  const sortBtnScore = () => {
    if (sortlist[2] === false) {
      setSortlist(["", "", true, ""]);
    } else {
      setSortlist(["", "", false, ""]);
    }
  };
  const sortBtnDate = () => {
    if (sortlist[3] === false) {
      setSortlist(["", "", "", true]);
    } else {
      setSortlist(["", "", "", false]);
    }
  };
  return (
    <div className="moviesList">
      <div className="sortBtn">
        <button id="sortBtnTitle" onClick={sortBtnTitle}>
          <p>Title {sortlist[0] ? "↑" : "↓"}</p>
        </button>
        <button id="sortBtnVote" onClick={sortBtnVote}>
          <p>Vote Count {sortlist[1] ? "↑" : "↓"}</p>
        </button>
        <button id="sortBtnScore" onClick={sortBtnScore}>
          <p>Average Score {sortlist[2] ? "↑" : "↓"}</p>
        </button>
        <button id="sortBtnDate" onClick={sortBtnDate}>
          <p>Release Date {sortlist[3] ? "↑" : "↓"}</p>
        </button>
      </div>
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
        <div key={item.id} className="movieContent">
          <img src={IMG_URL + item.poster_path} width="60%" />
          <br />
          <div className="movieBtn">
            <button id="likeBtn">
              <p>Liked</p>
            </button>
            <button id="blockBtn">
              <p>Block</p>
            </button>
          </div>
          <div className="movieTitle">
            <IconContext.Provider value={{ color: "red", size: "2rem" }}>
              <faIcons.FaHeart />
            </IconContext.Provider>
            {item.title}
          </div>
          <div>Release Date: {item.release_date}</div>
          <div>
            Vote Count: {item.vote_count}| Average Score: {item.vote_average}/10
          </div>
          <div className="movieOverview">{item.overview}</div>
        </div>
      ))}
    </div>
  );
}

const BordorLine = () => (
  <hr style={{ margin: "10px", width: "90%", border: "1px solid black" }} />
);

// Day2 - Yuanfeng
// class MoviesList extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       loading: true,
//       movie: [],
//       page: 1,
//     };
//   }
//   async componentDidMount() {
//     const url = `${BASE_URL}${MOVIE_TYPE}${API_KEY}${REST}` + this.state.page;
//     const response = await fetch(url);
//     const data = await response.json();
//     this.setState({ movie: data.results, loading: false });
//   }
//   async componentDidUpdate() {
//     const url = `${BASE_URL}${MOVIE_TYPE}${API_KEY}${REST}` + this.state.page;
//     const response = await fetch(url);
//     const data = await response.json();
//     this.setState({ movie: data.results, loading: false });
//   }

//   pre = () => {
//     if (this.state.page > 1) {
//       this.setState({ page: this.state.page - 1 });
//     }
//   };
//   nex = () => {
//     if (this.state.page < 500) {
//       this.setState({ page: this.state.page + 1 });
//     }
//   };
//   render() {
//     if (this.state.loading) {
//       return <div>loading...</div>;
//     }
//     if (!this.state.movie.length) {
//       return <div>Didn't get a movie</div>;
//     }
//     const { page, movie } = this.state;
//     return (
//       <div className="moviesList">
//         <div className="sortBtn">
//           <button></button>
//           <button></button>
//           <button></button>
//           <button></button>
//         </div>
//         <div className="pageBtn">
//           <hr />
//           <button onClick={this.pre} disabled={page === 1 ? true : false}>
//             Pre
//           </button>
//           <button onClick={this.nex} disabled={page === 500 ? true : false}>
//             Nex
//           </button>
//           <hr />
//         </div>
//         {movie.map((movielist) => (
//           <div id="Word">
//             <img
//               src={"https://image.tmdb.org/t/p/w500" + movielist.poster_path}
//             />
//             <br />
//             <button>Liked</button>
//             <button>Blocked</button>
//             <div>{movielist.title}</div>
//             <div>Release Date: {movielist.release_date}</div>
//             <div>
//               Vote Count: {movielist.vote_count}| Average Score:{" "}
//               {movielist.vote_average}/10
//             </div>
//             <div>{movielist.overview}</div>
//           </div>
//         ))}
//       </div>
//     );
//   }
// }

// export default MoviesList;
