import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { thunkLanguage } from "../store/LanguageReducer";

const SwitchLanguage = () => {
  const dispatch = useDispatch();

  const japaneseToggled = useSelector((state) => state.language);

  const switchLanguage = () => {
    if (japaneseToggled === true) dispatch(thunkLanguage(false));
    else dispatch(thunkLanguage(false));
  };

  return (
    <div className="toggle-language">
      <label>
        <input
          type="checkbox"
          name="japaneseToggled"
          checked={japaneseToggled}
          onChange={switchLanguage}
          // onChange={() => setJapaneseToggled(!japaneseToggled)}
        />
        日本語
      </label>
    </div>
  );
};

export default SwitchLanguage;
