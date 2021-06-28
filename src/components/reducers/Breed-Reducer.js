const initialState = {
  breed: null,
  images: [],
};

const BreedData = (state = initialState, action) => {
  switch (action.type) {
      case "SELECTED-BREED": {
        return {
          ...state,
          [action.key]: action.value
        }
      }
      default: {
          return state;
      }
  }
}

export default BreedData;