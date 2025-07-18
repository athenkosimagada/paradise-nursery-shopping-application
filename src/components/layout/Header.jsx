import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">
        <Link to="/app/products">My E-Commerce</Link>
      </h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link
              to="/app/products"
              className={`hover:text-blue-300 ${
                location.pathname === "/app/products" ? "text-blue-300" : ""
              }`}
            >
              Products
            </Link>
          </li>
        </ul>
      </nav>
      <Link
        to="/app/cart"
        className={`hover:text-blue-300 ${
          location.pathname === "/app/cart" ? "text-blue-300" : ""
        }`}
      >
        Cart
      </Link>
    </header>
  );
};

export default Header;
