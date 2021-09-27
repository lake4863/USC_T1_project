import React, { useState, useEffect, useContext } from "react";
import * as CgIcons from "react-icons/cg";
import * as faIcons from "react-icons/fa";
import { IconContext } from "react-icons";
import "../pages/MoviesList.css";
import { BASE_URL, MOVIE_TYPE, API_KEY, REST, IMG_URL } from "./Config";
import { GlobalContext, GlobalProvider } from "../context/GlobalState";

export default function RenderEachMovie(props) {
  const { item } = props;
  const { addMovieToLikedList, addMovieToBlockedList, likedList, blockedList } =
    useContext(GlobalContext);
  // const [pressLike, setPressLike] = useState(false);
  // const [likeBtnHTML, setlikeBtnHTML] = useState("Like");

  let likedListDisabled = likedList.find((likedListItem) =>
    likedListItem.id === item.id ? true : false
  );
  let blockedListDisabled = blockedList.find((BlockedListItem) =>
    BlockedListItem.id === item.id ? true : false
  );

  const handleLikeClick = (item) => {
    addMovieToLikedList(item);
    // console.log("let's see if I can get this value here", likedListDisabled)
    // setPressLike(true);
    // setlikeBtnHTML("Already Liked");
  };
  const handleBlockClick = (item) => {
    addMovieToBlockedList(item);
  };

  return (
    <>
        <div key={item.id} className="movieContent">
          <img src={IMG_URL + item.poster_path} width="60%" />
          <br />
          <div className="movieBtn">
            <button
              // id={pressLike ? "likedBtn" : "likeBtn"}
              id={likedListDisabled ? "likedBtn" : "likeBtn"}
              disabled={likedListDisabled}
              // onClick={() => addMovieToLikedList(item)}
              onClick={() => handleLikeClick(item)}
            >
              {/* <p>{likeBtnHTML}</p> */}
              <p>{likedListDisabled ? "Liked" : "Like"}</p>
            </button>
            <button
                id={blockedListDisabled ? "blockedBtn" : "blockBtn"}
                disabled = { blockedListDisabled }
                onClick={() => handleBlockClick(item)}
            >
              <p>{blockedListDisabled ? "Blocked" : "Block"}</p>
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
    </>
  );
}
