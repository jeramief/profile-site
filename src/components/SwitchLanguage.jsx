const SwitchLanguage = () => {
  return (
    <div className="toggle-language">
      <label>
        <input
          type="checkbox"
          name="japaneseToggled"
          checked={japaneseToggled}
          // onChange={setJapaneseToggled(!japaneseToggled)}
          onChange={() => setJapaneseToggled(!japaneseToggled)}
        />
        日本語
      </label>
    </div>
  );
};

export default SwitchLanguage;
