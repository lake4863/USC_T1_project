import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";
const initalState = {
  likedList: [],
  blockedList: [],
};

//create context
export const GlobalContext = createContext(initalState);

//provider components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initalState);

  //    useEffect(()=>{
  //        localStorage.setItem("likedList", JSON.stringify(state.likedList))
  //    },[state]);

  //action
  const addMovieToLikedList = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_LIKEDLIST", payload: movie });
  };
  const removeMovieToLikedList = (movie) => {
    dispatch({ type: "REMOVE_MOVIE_TO_LIKEDLIST", payload: movie });
  };
  const addMovieToBlockedList = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_BLOCKEDLIST", payload: movie });
  };
  const removeMovieToBlockedList = (movie) => {
    dispatch({ type: "remove_MOVIE_TO_BLOCKEDLIST", payload: movie });
  };

  return (
    <GlobalContext.Provider
      value={{
        likedList: state.likedList,
        blockedList: state.blockedList,
        addMovieToLikedList: addMovieToLikedList,
        removeMovieToLikedList: removeMovieToLikedList,
        addMovieToBlockedList: addMovieToBlockedList,
        removeMovieToBlockedList: removeMovieToBlockedList,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
