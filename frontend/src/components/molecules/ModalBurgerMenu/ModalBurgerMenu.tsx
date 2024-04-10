const ModalBurgerMenu = ({ isOpen, items }: any) => {
  const handleClick = (item: string): void => {
    if (item === "GitHub") {
      window.open("https://github.com/vstreet-defi/vstreet", "_blank");
    }
  };
  return (
    <div className={isOpen ? "menu open" : "menu"}>
      <ul>
        {items.map((item: any, index: any) => (
          <li key={index}>
            <button onClick={() => handleClick(item)}>{item}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ModalBurgerMenu;
