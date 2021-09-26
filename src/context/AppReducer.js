export default (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE_TO_LIKEDLIST":
      return {
        ...state,
        likedList: [action.payload, ...state.likedList],
      };
    case "REMOVE_MOVIE_TO_LIKEDLIST":
      let newarray = state.likedList.filter(element => element !== action.payload);
      return {
        ...state,
        likedList: newarray,
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
