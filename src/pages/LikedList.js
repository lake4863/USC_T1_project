import React, { useContext } from "react";
import {
  BASE_URL,
  MOVIE_TYPE,
  API_KEY,
  REST,
  IMG_URL,
} from "../components/Config";
import { GlobalContext } from "../context/GlobalState";
import "./LikedList.css";
import LikedListMovie from "../components/LikedListMovie";

export default function LikedList() {
  const { likedList } = useContext(GlobalContext);

  // const handleClick = () => {
  //   console.log(likedList);
  // };
  return (
    <div className="likedList">
      <div className="likedListContainer">
        <div className="pageTitle">Liked List</div>
        <div className="pageNoMovie">
          {likedList.length ? "" : "No movie in liked list currently."}
        </div>
        {/* <button onClick={handleClick}>asdf</button> */}
        <div className="likedListGrid">
          {likedList.map((item) => {
            return <LikedListMovie key={item.id} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
}
