import { useDispatch, useSelector } from "react-redux";

import { selectedLanguage } from "../store/LanguageReducer";

const SwitchLanguage = () => {
  const dispatch = useDispatch();

  const japaneseToggled = useSelector(
    (state) => state.languageState.japaneseToggled
  );

  const switchLanguage = () => {
    dispatch(selectedLanguage(!japaneseToggled));
  };

  return (
    <div className="toggle-language">
      <input
        id="japanese-toggle-switch"
        className="japanese-toggle-checkbox"
        type="checkbox"
        name="japaneseToggled"
        checked={japaneseToggled}
        onChange={switchLanguage}
      />
      <label
        className="japanese-toggle-label"
        htmlFor="japanese-toggle-switch"
        style={{ background: japaneseToggled && "#06D6A0" }}
      >
        <span className="japanese-toggle-button" />
        <span style={{ visibility: !japaneseToggled && "hidden" }}>日本語</span>
      </label>
    </div>
  );
};

export default SwitchLanguage;
