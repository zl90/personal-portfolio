import Logo from "./Logo/Logo";
import HelloButton from "./HelloButton/HelloButton";

function Header() {
  return (
    <header className="header-container">
      <Logo />
      <HelloButton />
    </header>
  );
}

export default Header;
