const initialState = {
  style: "Modern",
  header: "Modern",
  error: null
}

const StylesReducer = (state=initialState, action) => {
  switch (action.type) {
    case "Change_Style": {
      return {...state, style: action.style, header: action.style};
    }

    default: {
      return {...state, error: action.style};
    }
  }
};

export default StylesReducer;
