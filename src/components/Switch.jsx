import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const SwitchLanguage = () => {
  const { languageSelected, setLanguageSelected } = useContext(LanguageContext);

  return (
    <div className="toggle-language">
      <label>
        <input
          type="checkbox"
          name="languageSelected"
          checked={languageSelected === "japanese"}
          onChange={(e) =>
            setLanguageSelected(e.target.checked ? "japanese" : "english")
          }
        />
        日本語
      </label>
    </div>
  );
};

export default SwitchLanguage;
