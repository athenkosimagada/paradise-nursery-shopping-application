import { Link, useLocation } from "react-router-dom";
import { LuShoppingCart } from "react-icons/lu";

const Header = () => {
  const location = useLocation();

  return (
    <header className="bg-primary">
      <div className="max-w-[1440px] mx-auto px-8 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <Link className="flex items-center gap-6" to="/app/products">
            <div>Logo</div>
            <div className="flex flex-col">
              <span className="text-[18px]">Paradise Nursery</span>
              <span className="text-sm font-normal italic">
                Where Green Meets Serenity
              </span>
            </div>
          </Link>
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/app/products" className="text-white">
                Plants
              </Link>
            </li>
          </ul>
        </nav>
        <Link to="/app/cart" className="">
          <LuShoppingCart />
        </Link>
      </div>
    </header>
  );
};

export default Header;
