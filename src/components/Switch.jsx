const Switch = ({
  japaneseToggled = false,
  isToggled = false,
  onToggle = false,
}) => {
  return (
    <label className="japaneseToggle">
      <input type="checkbox" checked={isToggled} onChange={onToggle} />
      <span className="slider" />
    </label>
  );
};

export default Switch;
