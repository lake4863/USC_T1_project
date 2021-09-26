import React from "react";
import { BASE_URL, MOVIE_TYPE, API_KEY, REST, IMG_URL } from "./Config";

function BlockedListMovie({ item }) {
  return (
    <div className="likedListMovie">
      <img src={IMG_URL + item.poster_path} alt={`${item.title}`} />
    </div>
  );
}

export default BlockedListMovie;
