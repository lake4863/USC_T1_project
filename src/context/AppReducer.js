export default (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE_TO_LIKEDLIST":
      return {
        ...state,
        likedList: [action.payload, ...state.likedList],
      };
    case "ADD_MOVIE_TO_BLOCKEDLIST":
      return {
        ...state,
        blockedList: [action.payload, ...state.blockedList],
      };
    default:
      return state;
  }
};
