import { useDispatch, useSelector } from "react-redux";

import { selectedLanguage } from "../store/LanguageReducer";

const SwitchLanguage = () => {
  const dispatch = useDispatch();

  const japaneseToggled = useSelector(
    (state) => state.languageState.japaneseToggled
  );

  const switchLanguage = () => {
    console.log({ japaneseToggled });

    dispatch(selectedLanguage(!japaneseToggled));

    console.log({ japaneseToggled });
  };

  return (
    <div className="toggle-language">
      <label>
        <input
          type="checkbox"
          name="japaneseToggled"
          checked={japaneseToggled}
          onChange={switchLanguage}
        />
        日本語
      </label>
    </div>
  );
};

export default SwitchLanguage;
