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
        style={{ background: japaneseToggled && "#675bcf" }}
      >
        <span className="japanese-toggle-button">日本語</span>
        {/* <span
          style={{
            visibility: !japaneseToggled && "hidden",
            fontSize: ".8em",
          }}
        >
          {japaneseToggled ? "EN" : "日本語"}
        </span> */}
      </label>
    </div>
  );
};

export default SwitchLanguage;
