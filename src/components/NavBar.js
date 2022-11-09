function Navbar() {
  const menuItems = ["Home", "Contact", "FAQ", "About", "Products"];
  menuItems.pop();
  return (
    <div className="navbar">
      {menuItems.map((item, index) => (
        <a href="/">{item}</a>
      ))}
    </div>
  );
}
export default Navbar;
