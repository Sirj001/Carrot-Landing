const Header = () => {
  return (
    <header className="">
      <div className="nav-6  p-4 flex justify-between items-center border">

        <h1 className="text-xl font-bold">Carrot</h1>
        <nav className="space-x-4">
         <ul>
          <li><a href="/" className="text-black">
            Product
          </a></li>
          <li><a href="/" className="text-black">
            Our Why
          </a></li>
           <li><a href="/" className="text-black">
            About Us
            </a></li>
            <li><a href="/" className="text-black">
             Contact
            </a></li>
        </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
