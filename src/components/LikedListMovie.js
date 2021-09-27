import React from "react";
import { BASE_URL, MOVIE_TYPE, API_KEY, REST, IMG_URL } from "./Config";
import {Moviecontrols} from "./Moviecontrols"
function LikedListMovie({ item, type }) {
  return (
      <div className="likedListMovie">
        {item.poster_path ? (
        <img src={IMG_URL + item.poster_path} alt={`${item.title}`} />
        ):(
          <div className="filler-poster"></div>
              )}
              <Moviecontrols type={type} item={item}/>
      </div>
  );
}

export default LikedListMovie;
