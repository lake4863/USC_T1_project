import React from "react";
import "./MoviesList.css";
import { BASE_URL, MOVIE_TYPE, API_KEY, REST } from "../components/Config";

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

export default MoviesList;
