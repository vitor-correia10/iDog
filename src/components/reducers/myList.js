const initialState = {};

const myListReducer = (state = initialState, action) => {
  switch (action.type) {
      case "ADD-IMAGE": {
        return {
          ...state,
          [action.url]: {
            url: action.url,
            isAddedToCart: true,
          },
        }
      }
      case 'REMOVE-IMAGE': {
        const newList = { ...state };
        delete newList[action.url];
        return newList;
      }
      default: {
          return state;
      }
  }
}

export default myListReducer;