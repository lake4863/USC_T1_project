export default (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE_TO_LIKEDLIST":
      return {
        ...state,
        likedList: [action.payload, ...state.likedList],
      };
    case "REMOVE_MOVIE_TO_LIKEDLIST":
      return {
        ...state,
        likedList: state.likedList.filter((item) => item.id !== action.payload),
      };
    case "ADD_MOVIE_TO_BLOCKEDLIST":
      return {
        ...state,
        blockedList: [action.payload, ...state.blockedList],
      };
    case "REMOVE_MOVIE_TO_BLOCKEDLIST":
      return {
        ...state,
        blockedList: state.blockedList.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};
