import React from "react";
import { BASE_URL, MOVIE_TYPE, API_KEY, REST, IMG_URL } from "./Config";
import {Moviecontrols} from "./Moviecontrols"
function BlockedListMovie({ item,type }) {
  return (
    <div className="likedListMovie">
      <img src={IMG_URL + item.poster_path} alt={`${item.title}`} />
      <Moviecontrols type={type} item={item}/>
    </div>
    
  );
}

export default BlockedListMovie;
