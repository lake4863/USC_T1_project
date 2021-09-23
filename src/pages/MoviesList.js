import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    const url = `${BASE_URL}${MOVIE_TYPE}${API_KEY}${REST}` + page;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovie(data.results);
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
      <div className="sortBtn">
        <button>Title</button>
        <button>Vote Count</button>
        <button>Average Score</button>
        <button>Release Date</button>
      </div>
      <div className="pageBtn">
        <hr />
        <button onClick={handlePrev} disabled={page === 1 ? true : false}>
          Pre
        </button>
        <button onClick={handleNext} disabled={page === 500 ? true : false}>
          Nex
        </button>
        <hr />
      </div>
      {movie.map((item) => (
        <div key={item.id} id="Word">
          <img src={IMG_URL + item.poster_path} />
          <br />
          <button>Liked</button>
          <button>Blocked</button>
          <div>{item.title}</div>
          <div>Release Date: {item.release_date}</div>
          <div>
            Vote Count: {item.vote_count}| Average Score: {item.vote_average}/10
          </div>
          <div>{item.overview}</div>
        </div>
      ))}
    </div>
  );
}

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
