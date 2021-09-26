export default (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE_TO_LIKEDLIST":
      return {
        ...state,
        likedList: [action.payload, ...state.likedList],
      };
    case "REMOVE_MOVIE_TO_LIKEDLIST":
      let newArray = state.likedList.filter(element => element !== action.payload);
      return {
        ...state,
        //likedList: [action.payload, ...state.likedList],
        likedList: newArray,
      };
    case "ADD_MOVIE_TO_BLOCKEDLIST":
      return {
        ...state,
        blockedList: [action.payload, ...state.blockedList],
      };
    case "REMOVE_MOVIE_TO_BLOCKEDLIST":
      return {
        ...state,
        blockedList: [action.payload, ...state.blockedList],
      };
    default:
      return state;
  }
};
