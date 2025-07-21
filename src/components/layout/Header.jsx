import { Link, useLocation } from "react-router-dom";
import { LuShoppingCart } from "react-icons/lu";
import { useSelector } from "react-redux";

const Header = () => {
  const cartProducts = useSelector((state) => state.cart.cart);

  const getQuantity = () => {
    let quantity = 0;
    Object.keys(cartProducts).forEach((productId) => {
      quantity += cartProducts[productId].quantity;
    });

    return quantity;
  };

  return (
    <header className="bg-primary sticky top-0 left-0 right-0 z-100">
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
        <Link to="/app/cart" className="relative">
          <LuShoppingCart />
          {getQuantity() > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
              {getQuantity()}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
};

export default Header;
