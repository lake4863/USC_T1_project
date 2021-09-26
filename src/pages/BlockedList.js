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
import BlockedListMovie from "../components/BlockedListMovie";

export default function BlockedList() {
  const { blockedList } = useContext(GlobalContext);

  return (
    <div className="likedList">
      <div className="likedListContainer">
        <div className="pageTitle">Blocked List</div>
        <div className="pageNoMovie">
          {blockedList.length ? "" : "No movie in blocked list currently."}
        </div>
        <div className="likedListGrid">
          {blockedList.map((item) => {
            return <BlockedListMovie item={item} />;
          })}
        </div>
      </div>
    </div>
  );
}
