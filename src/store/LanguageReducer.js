const SELECTED_LANGUAGE = "language/selectedLanguage";

const selectedLanguage = (language) => ({
  type: SELECTED_LANGUAGE,
  language,
});

export const thunkLanguage = (language) => async (dispatch) => {
  console.log(language);

  return dispatch(selectedLanguage(language));
};

const initialState = {};

const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_LANGUAGE: {
      const newState = { ...state };
      newState[action] = action.language;
      return newState;
    }
    default: {
      return state;
    }
  }
};

export default languageReducer;
