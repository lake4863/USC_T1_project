import React from "react";
import {
  BASE_URL,
  MOVIE_TYPE,
  API_KEY,
  REST,
  IMG_URL,
} from "../components/Config";

function LikedList() {
  const url = `${BASE_URL}${MOVIE_TYPE}${API_KEY}${REST}1`;
  return (
    <div className="likedList">
      <h1>LikedList</h1>
    </div>
  );
}

export default LikedList;
