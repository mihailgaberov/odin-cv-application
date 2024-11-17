import Logo from "./Logo";

function Header() {
  return (
    <header className="bg-gray-800 text-white py-4 px-6">
      <div className="container mx-auto flex items-center justify-between">
        <Logo />
        <h1 className="text-xl font-semibold">CV Builder v1.1</h1>
      </div>
    </header>
  );
}

export default Header;
