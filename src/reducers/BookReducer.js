export const bookReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return [
        ...state,
        {
          title: action.book.title,
          author: action.book.author,
          id: Math.random(Math.floor * 300 + 10)
        }
      ];
    case "DELETE_BOOK":
      return state.filter(book => book.id !== action.id);
    default:
      return state;
  }
};
