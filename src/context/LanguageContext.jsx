import { createContext, useState } from "react";

export const LanguageContext = createContext();

export default function LanguageProvider(props) {
  const [languageSelected, setLanguageSelected] = useState("english");

  return (
    <LanguageContext.Provider value={{ languageSelected, setLanguageSelected }}>
      {props.children}
    </LanguageContext.Provider>
  );
}
