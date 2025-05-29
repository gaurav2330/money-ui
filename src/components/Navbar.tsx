const Navbar = () => {
  return (
    <header className="d-flex flex-row px-3 py-2 justify-content-between">
      <h1 className="text-xl font-bold">Money Maze</h1>
      <div className="d-flex flex-row">
        <nav className="d-flex flex-row items-center">
          <ul className="d-flex flex-row navbar-nav">
            <li className="nav-item"><a href="#" className="text-gray-700">Dashboard</a></li>
            <li className="nav-item"><a href="#" className="text-gray-700">Transactions</a></li>
            <li className="nav-item"><a href="#" className="text-gray-700">Savings</a></li>
            <li className="nav-item"><a href="#" className="text-gray-700">Credit</a></li>
            <li className="nav-item"><a href="#" className="text-gray-700">Investments</a></li>
          </ul>
        </nav>
        <div className="flex items-center">
          <img src="/path/to/avatar.jpg" alt="Profile" className="w-8 h-8 rounded-full" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
