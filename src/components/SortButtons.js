import React from "react";

export default function SortButtons(props) {
  const { movie, setMovie, sortlist, setSortlist } = props;
  // const [sortlist, setSortlist] = useState(["", "", "", ""]);

  // Reset the other buttons active status if another one is pressed
  // First time press does not change ↓ arrow direction
  // Sort function is done for each single page
  const sortBtnTitle = () => {
    if (sortlist[0] === false) {
      setSortlist([true, "", "", ""]);
      setMovie(
        movie.sort((a, b) => {
          if (a.title > b.title) return -1;
        })
      );
    } else {
      // first time & true
      setSortlist([false, "", "", ""]);
      setMovie(
        movie.sort((a, b) => {
          if (a.title < b.title) return -1;
        })
      );
    }
  };
  const sortBtnVote = () => {
    if (sortlist[1] === false) {
      setSortlist(["", true, "", ""]);
      setMovie(
        movie.sort((a, b) => {
          if (a.vote_count < b.vote_count) return -1;
        })
      );
    } else {
      setSortlist(["", false, "", ""]);
      setMovie(
        movie.sort((a, b) => {
          if (a.vote_count > b.vote_count) return -1;
        })
      );
    }
  };
  const sortBtnScore = () => {
    if (sortlist[2] === false) {
      setSortlist(["", "", true, ""]);
      setMovie(
        movie.sort((a, b) => {
          if (a.vote_average < b.vote_average) return -1;
        })
      );
    } else {
      setSortlist(["", "", false, ""]);
      setMovie(
        movie.sort((a, b) => {
          if (a.vote_average > b.vote_average) return -1;
        })
      );
    }
  };
  const sortBtnDate = () => {
    if (sortlist[3] === false) {
      setSortlist(["", "", "", true]);
      setMovie(
        movie.sort((a, b) => {
          if (a.release_date < b.release_date) return -1;
        })
      );
    } else {
      setSortlist(["", "", "", false]);
      setMovie(
        movie.sort((a, b) => {
          if (a.release_date > b.release_date) return -1;
        })
      );
    }
  };
  return (
    <>
      <div className="sortBtnContainer">
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
      </div>
    </>
  );
}
