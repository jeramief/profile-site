import { createContext, useState } from "react";

export const LanguageContext = createContext();

export default function LanguageProvider(props) {
  const [japaneseToggled, setJapaneseToggled] = useState(false);

  return (
    <LanguageContext.Provider value={{ japaneseToggled, setJapaneseToggled }}>
      {props.children}
    </LanguageContext.Provider>
  );
}
