import Logo from "./Logo";

function Header() {
  return (
    <header className="flex items-center justify-between text-left border-gray-900">
      <Logo />
      <div>CV Builder v1.1</div>
    </header>
  );
}
export default Header;
