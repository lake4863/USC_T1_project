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
    dispatch({ type: "REMOVE_MOVIE_TO_BLOCKEDLIST", payload: movie });
  };
  const removemovieFromlikedlist =(id)=>{
    dispatch({type:"REMOVE_MOVIE_FROM_LIKEDLIST", payload:id})
  }
  const removemovieFromblockedlist =(id)=>{
    dispatch({type:"REMOVE_MOVIE_FROM_BLOCKEDLIST", payload:id})
  }
  return (
    <GlobalContext.Provider
      value={{
        likedList: state.likedList,
        blockedList: state.blockedList,
        addMovieToLikedList,
        removeMovieToLikedList,
        addMovieToBlockedList,
        removeMovieToBlockedList,
        removemovieFromlikedlist,
        removemovieFromblockedlist,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
