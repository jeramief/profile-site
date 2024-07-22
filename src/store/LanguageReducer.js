const SELECTED_LANGUAGE = "language/selectedLanguage";

export const selectedLanguage = (language) => ({
  type: SELECTED_LANGUAGE,
  language,
});

const initialState = { japaneseToggled: false };

const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_LANGUAGE: {
      return {
        ...state,
        japaneseToggled: action.language,
      };

      // const newState = { ...state };
      // newState[action.language] = action.language;
      // return newState;
    }
    default: {
      return state;
    }
  }
};

export default languageReducer;
