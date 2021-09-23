import React from "react";
import { BASE_URL, MOVIE_TYPE, API_KEY, REST } from "../components/Config";

function LikedList() {
  const url = `${BASE_URL}${MOVIE_TYPE}${API_KEY}${REST}` + this.state.page;
  return (
    <div className="likedList">
      <h1>LikedList</h1>
    </div>
  );
}

export default LikedList;
